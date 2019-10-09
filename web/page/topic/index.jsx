import React, { useEffect } from 'react';
import AppHeader from '../../components/AppHeader';
import AppFooter from '../../components/AppFooter';
import Comment from './comment';
import { fetchTopicById } from '../../api/topic';
import { fetchReplyList } from '../../api/reply';
import styled from 'styled-components';
import CollectionSvg from '../../components/svgs/collection';
import LikeSvg from '../../components/svgs/like';
import queryString from 'query-string';
import { Link, withRouter } from 'react-router-dom';
import { timeAgo, parseTime } from '../../utils/time';
import * as markdown from '../../utils/markdown';
import { TOPIC_TYPE } from '../../configs/constant';
import Vditor from 'vditor';
import {
    Wrap,
    Title,
    Meta,
    MetaBaseInfo,
    MetaReaction,
    CollectCountWrap,
    LikeCountWrap,
    Hr,
    MarkdownBody,
} from './style';
import UserInfo from './user-info';

const Page = props => {
    const topic = props.topic || {};
    const replyList = props.replyList || {
        rows: [],
        count: 0,
    };
    useEffect(() => {
        Vditor.highlightRender('github', true, document.getElementById('markdownBody'));
    }, [topic]);
    return (
        <React.Fragment>
            <AppHeader></AppHeader>
            <Wrap>
                <Title>{topic.title}</Title>
                <Meta>
                    <MetaBaseInfo>
                        <span>发布于 {timeAgo(topic.createdAt)}</span>
                        <span>
                            来自节点 <u>{topic.node && topic.node.name}</u> 下的 <u>{TOPIC_TYPE[topic.type]}</u>
                        </span>
                    </MetaBaseInfo>
                    <MetaReaction>
                        <CollectCountWrap>
                            <CollectionSvg className="icon"></CollectionSvg>
                            <span>收藏</span>
                            <span>({topic.collectCount})</span>
                        </CollectCountWrap>
                        <LikeCountWrap>
                            <LikeSvg className="icon"></LikeSvg>
                            <span>赞</span>
                            <span>({topic.visitCount})</span>
                        </LikeCountWrap>
                        <div>
                            <span>浏览</span>
                            <span>({topic.visitCount})</span>
                        </div>
                    </MetaReaction>
                </Meta>
                <UserInfo user={topic.user || {}}></UserInfo>
                <MarkdownBody
                    className="vditor-reset"
                    id="markdownBody"
                    dangerouslySetInnerHTML={{ __html: markdown.render(topic.content) }}
                ></MarkdownBody>
                <Comment topic={topic} replyList={replyList}></Comment>
            </Wrap>
            <AppFooter></AppFooter>
        </React.Fragment>
    );
};

Page.getInitialProps = async ctx => {
    const { query, match } = ctx;
    const page = 1;
    const limit = 100;
    let topicId;

    if (query) {
        topicId = query.id;
    } else {
        topicId = match.params.id;
    }

    const [topic, replyList] = await Promise.all([
        fetchTopicById(topicId).then(res => res.data.data),
        fetchReplyList(page, limit, { topicId }).then(res => res.data.data),
    ]);

    return {
        topic,
        replyList,
    };
};

export default Page;
