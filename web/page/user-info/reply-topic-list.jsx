import React from 'react';
import styles from './style.module.scss';
import { Link } from 'react-router-dom';
import { TOPIC_TYPE } from '../../configs/constant';
import { timeAgo } from '../../utils/time';
import CommentSvg from '@material-ui/icons/Message';
import styled from 'styled-components';

const ReplyTopicListWrap = styled.div`
    padding: 0 20px 20px;
    background-color: #fff;
    border-top: 1px solid #f0f0f0;
`;

const ReplySign = styled.div`
    padding: 20px 0;
    background-color: #fff;
    span {
        color: #3f51b5;
    }
    a {
        color: #3f51b5;
    }
`;

const Cell = styled.div`
    padding-right: 10px;
    background: #fff;
    display: flex;
    width: 100%;
    position: relative;
    padding: 20px;
    font-size: 14px;
    border-left: 2px solid #ccc;
    background-color: #f5f5f5;
`;

export default props => {
    const item = props.item;
    const topic = props.item.topic;
    return (
        <ReplyTopicListWrap>
            <ReplySign>
                于 <span>{timeAgo(item.createdAt)}</span> 回复以下话题，
                <Link to={`/topic/${topic.id}`}>点击查看你的回复</Link>
            </ReplySign>
            <Cell>
                <Link className={styles.userAvatar} to={`/user/${topic.user && topic.user.account}`}>
                    <img src={topic.user && topic.user.avatar} title={topic.user && topic.user.username} />
                </Link>
                <div className={styles.cellContent}>
                    <div className={styles.cellHeader}>
                        <div className="topic_title_wrapper">
                            <span className="put_top">{topic.top ? '置顶' : TOPIC_TYPE[topic.type]}</span>
                            {topic.good && <span className="put_top">精华</span>}
                            <Link className="topic_title" to={`/topic/${topic.id}`} title={topic.title}>
                                {topic.title}
                            </Link>
                        </div>
                        {topic.lastReplyUser ? (
                            <a className={styles.lastTime} href={`/topic/${topic.id}`}>
                                <img className={styles.userSmallAvatar} src={topic.user && topic.user.avatar} />
                                <span style={{ fontSize: '12px', color: '#333' }}>{timeAgo(topic.lastRepliedAt)} </span>
                            </a>
                        ) : (
                            <span className={styles.lastTime} style={{ fontSize: '12px', color: '#333' }}>
                                {timeAgo(topic.createdAt)}
                            </span>
                        )}
                    </div>
                    <div className={styles.cellBottom}>
                        <span className={styles.author}>作者：{topic.user && topic.user.username} ⁝ </span>
                        <span className={styles.time}>
                            发布于: {timeAgo(topic.createdAt)} ⁝ 节点: {topic.node && topic.node.name} ⁝ 浏览:
                            {topic.visitCount}
                        </span>
                        <a className={styles.lastTime} href={`/topic/${topic.id}`}>
                            <span className={styles.commentNum}>
                                <CommentSvg style={{ fontSize: '14px' }}></CommentSvg> {topic.replyCount}
                            </span>
                        </a>
                    </div>
                </div>
            </Cell>
        </ReplyTopicListWrap>
    );
};
