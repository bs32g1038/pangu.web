import React, { useEffect } from 'react';
import Comment from './comment';
import { fetchTopicById } from '../../api/topic';
import { fetchReplyList } from '../../api/reply';
import CollectionSvg from '../../components/svgs/collection';
import LikeSvg from '../../components/svgs/like';
import { timeAgo, parseTime } from '../../libs/time';
import marked from '../../libs/marked';
import { TOPIC_TYPE } from '../../configs/constant';
import { RECRUIT_INFO } from '../../configs/constant';
import LocationSvg from '../../components/svgs/location';
import EducationSvg from '../../components/svgs/education';
import ExperienceSvg from '../../components/svgs/experience';
import SalarySvg from '../../components/svgs/salary';
import JobSvg from '../../components/svgs/job';
import FinanceSvg from '../../components/svgs/finance';
import StaffSvg from '../../components/svgs/staff';
import App from '../../layouts/app';

import {
    Wrap,
    Title,
    Meta,
    MetaBaseInfo,
    MetaReaction,
    CollectCountWrap,
    LikeCountWrap,
    MarkdownBody,
    IconSvg,
    RecruitInfoWrap,
    RecruitInfoSign,
    RecruitInfoContent,
    RecruitInfoItem,
    Tags,
    Attention,
} from './style';
import UserInfo from './user-info';

const Page = props => {
    const topic = props.topic || {};
    const replyList = props.replyList || {
        rows: [],
        count: 0,
    };
    useEffect(() => {
        // Vditor.highlightRender('github', true, document.getElementById('markdownBody'));
    }, [topic]);
    return (
        <App>
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
                {topic.recruitInfo && (
                    <RecruitInfoWrap>
                        <RecruitInfoSign>
                            招聘信息（有效期：{parseTime(topic.recruitInfo.startTime, 'YYYY-MM-DD')}-
                            {parseTime(topic.recruitInfo.endTime, 'YYYY-MM-DD')}）
                        </RecruitInfoSign>
                        <RecruitInfoContent>
                            <RecruitInfoItem title="公司位置">
                                <IconSvg as={LocationSvg}></IconSvg>
                                <span>{topic.recruitInfo.location}</span>
                            </RecruitInfoItem>
                            <RecruitInfoItem title="学历">
                                <IconSvg as={EducationSvg}></IconSvg>
                                <span>{RECRUIT_INFO.education[topic.recruitInfo.education]}</span>
                            </RecruitInfoItem>
                            <RecruitInfoItem title="工作经验">
                                <IconSvg as={ExperienceSvg}></IconSvg>
                                <span>{RECRUIT_INFO.experience[topic.recruitInfo.experience]}</span>
                            </RecruitInfoItem>
                            <RecruitInfoItem title="薪资情况">
                                <IconSvg as={SalarySvg}></IconSvg>
                                <span>{RECRUIT_INFO.salary[topic.recruitInfo.salary]}</span>
                            </RecruitInfoItem>
                            <RecruitInfoItem title="工作岗位">
                                <IconSvg as={JobSvg}></IconSvg>
                                <span>{topic.recruitInfo.job}</span>
                            </RecruitInfoItem>
                            <RecruitInfoItem title="融资情况">
                                <IconSvg as={FinanceSvg}></IconSvg>
                                <span>{RECRUIT_INFO.finance[topic.recruitInfo.finance]}</span>
                            </RecruitInfoItem>
                            <RecruitInfoItem title="人员分布">
                                <IconSvg as={StaffSvg}></IconSvg>
                                <span>{RECRUIT_INFO.staff[topic.recruitInfo.staff]}</span>
                            </RecruitInfoItem>
                        </RecruitInfoContent>
                    </RecruitInfoWrap>
                )}
                <MarkdownBody
                    className="vditor-reset"
                    id="markdownBody"
                    dangerouslySetInnerHTML={{ __html: topic.isHtml ? topic.content : marked(topic.content) }}
                ></MarkdownBody>
                <Attention>
                    <svg viewBox="0 0 32 32" height="14" width="14">
                        <path d="M8 4v28l10-10 10 10v-28h-20zM24 0h-20v28l2-2v-24h18v-2z"></path>
                    </svg>
                    关注下面的标签，发现更多相似文章
                </Attention>
                {topic.tags && topic.tags.length > 0 && (
                    <Tags>
                        {topic.tags.map((item: any) => (
                            <a key={item.id}>
                                <img src={item.icon} alt={item.name} />
                                {item.name}
                            </a>
                        ))}
                    </Tags>
                )}
                <Comment topic={topic} replyList={replyList}></Comment>
            </Wrap>
        </App>
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
