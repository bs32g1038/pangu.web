import React from 'react';
import Link from 'next/link';
import { TOPIC_TYPE } from '../../../configs/constant';
import { timeAgo } from '../../../libs/time';
import CommentSvg from '@material-ui/icons/Message';

import {
    ReplyTopicListWrap,
    ReplySign,
    Cell,
    UserAvatar,
    CellContent,
    CellHeader,
    CellBottom,
    Sign,
    TopicTitleWrap,
    UserSmallAvatar,
} from './styles';

export default props => {
    const item = props.item;
    const topic = props.item.topic;
    return (
        <ReplyTopicListWrap>
            <ReplySign>
                于 <span>{timeAgo(item.createdAt)}</span> 回复以下话题，
                <Link href={`/topic/${topic.id}`} passHref={true}>
                    <a>点击查看你的回复</a>
                </Link>
            </ReplySign>
            <Cell>
                <Link href={`/user/${topic.user && topic.user.account}`} passHref={true}>
                    <UserAvatar>
                        <img src={topic.user && topic.user.avatar} title={topic.user && topic.user.username} />
                    </UserAvatar>
                </Link>
                <CellContent>
                    <CellHeader>
                        <div className="topic_title_wrapper">
                            <Sign style={item.top ? { backgroundColor: '#80bd01', color: '#fff' } : {}}>
                                {item.top ? '置顶' : TOPIC_TYPE[item.type]}
                            </Sign>
                            {item.good && <Sign>精华</Sign>}
                            <Link href={`/topic/${topic.id}`} passHref={true}>
                                <TopicTitleWrap title={topic.title}>{topic.title}</TopicTitleWrap>
                            </Link>
                        </div>
                        {topic.lastReplyUser ? (
                            <a className="last-time" href={`/topic/${topic.id}`}>
                                <UserSmallAvatar src={topic.user && topic.user.avatar} />
                                <span style={{ fontSize: '12px', color: '#333' }}>{timeAgo(topic.lastRepliedAt)} </span>
                            </a>
                        ) : (
                            <span className="last-time" style={{ fontSize: '12px', color: '#333' }}>
                                {timeAgo(topic.createdAt)}
                            </span>
                        )}
                    </CellHeader>
                    <CellBottom>
                        <span className="author">作者：{topic.user && topic.user.username} ⁝ </span>
                        <span className="time">
                            发布于: {timeAgo(topic.createdAt)} ⁝ 节点: {topic.node && topic.node.name} ⁝ 浏览:
                            {topic.visitCount}
                        </span>
                        <Link href={`/topic/${item.id}`}>
                            <a className="comment-num">
                                <CommentSvg style={{ fontSize: '14px' }}></CommentSvg> {topic.replyCount}
                            </a>
                        </Link>
                    </CellBottom>
                </CellContent>
            </Cell>
        </ReplyTopicListWrap>
    );
};
