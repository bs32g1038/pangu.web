import React from 'react';
import Link from 'next/link';
import CommentSvg from '@material-ui/icons/Message';
import { timeAgo } from '../../libs/time';
import { TOPIC_TYPE } from '../../configs/constant';
import styled from 'styled-components';

const Cell = styled.div`
    padding-right: 10px;
    background: #fff;
    border-bottom: 1px solid #f0f0f0;
    display: flex;
    width: 100%;
    position: relative;
    padding: 10px 0 10px 10px;
    font-size: 14px;
    align-items: center;
    &:last-child {
        border-bottom: none;
    }
    .last-time {
        text-align: right;
        margin-right: 10px;
    }
    .author {
        margin-right: 10px;
    }
    .time {
        flex: 1 0 auto;
    }
    .comment-num {
        color: rgba(0, 0, 0, 0.65);
        text-align: right;
        margin-right: 10px;
    }
`;

const UserAvatar = styled.a`
    margin-right: 8px;
    max-width: 40px;
    min-width: 40px;
    img {
        width: 40px;
        height: 40px;
        border-radius: 3px;
    }
`;
const CellContent = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1 0 auto;
`;

const Sign = styled.div`
    border: 1px solid #80bd01;
    padding: 2px 4px;
    border-radius: 3px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    -o-border-radius: 3px;
    font-size: 12px;
    color: rgba(0, 0, 0, 0.65);
    display: block;
`;

const CellHeader = styled.div`
    flex: 1 0 auto;
    display: flex;
    align-items: center;
    ${Sign} + ${Sign} {
        margin-left: 10px;
    }
`;

const TopicTitleWrap = styled.div`
    flex: 1 0 auto;
    width: 0;
`;

const TopicTitleA = styled.a`
    -o-text-overflow: ellipsis;
    white-space: nowrap;
    display: block;
    overflow: hidden;
    font-size: 16px;
    line-height: 30px;
    text-decoration: none;
    color: rgba(0, 0, 0, 0.85);
    margin-left: 10px;
    text-overflow: ellipsis;
    margin-right: 10px;
    cursor: pointer;
`;

const CellBottom = styled.div`
    display: flex;
    align-items: center;
    margin-top: 0.8em;
    color: rgba(0, 0, 0, 0.45);
`;

const UserSmallAvatar = styled.img`
    height: 18px;
    width: 18px;
    vertical-align: middle;
    margin-right: 0.5em;
    border-radius: 3px;
`;

interface Props {
    item: {
        id: string;
        title: string;
        top: boolean;
        good: boolean;
        type: number;
        createdAt: string;
        visitCount: number;
        replyCount: number;
        lastRepliedAt: string;
        user: {
            username: string;
            account: string;
            avatar: string;
        };
        node: {
            id: string;
            name: string;
        };
        lastReplyUser?: {
            id: string;
            account: string;
            avatar: string;
        };
    };
}

export default (props: Props) => {
    const item = props.item;
    return (
        <Cell key={item.id}>
            <Link href={`/user/${item.user && item.user.account}`}>
                <UserAvatar>
                    <img src={item.user && item.user.avatar} title={item.user && item.user.username} />
                </UserAvatar>
            </Link>
            <CellContent>
                <CellHeader>
                    <Sign style={item.top ? { backgroundColor: '#80bd01', color: '#fff' } : {}}>
                        {item.top ? '置顶' : TOPIC_TYPE[item.type]}
                    </Sign>
                    {item.good && <Sign>精华</Sign>}
                    <TopicTitleWrap>
                        <Link href={`/topic/${item.id}`} passHref={true}>
                            <TopicTitleA title={item.title}>{item.title}</TopicTitleA>
                        </Link>
                    </TopicTitleWrap>
                    {item.lastReplyUser ? (
                        <a className="last-time" href={`/topic/${item.id}`}>
                            <UserSmallAvatar src={item.user && item.user.avatar} />
                            <span style={{ fontSize: '12px', color: '#333' }}>{timeAgo(item.lastRepliedAt)} </span>
                        </a>
                    ) : (
                        <span className="last-time" style={{ fontSize: '12px', color: '#333' }}>
                            {timeAgo(item.createdAt)}
                        </span>
                    )}
                </CellHeader>
                <CellBottom>
                    <span className="author">作者：{item.user && item.user.username} ⁝ </span>
                    <span className="time">
                        发布于: {timeAgo(item.createdAt)} ⁝ 节点: {item.node && item.node.name} ⁝ 浏览:
                        {item.visitCount}
                    </span>
                    <Link href={`/topic/${item.id}`}>
                        <a className="comment-num">
                            <CommentSvg style={{ fontSize: '14px' }}></CommentSvg> {item.replyCount}
                        </a>
                    </Link>
                </CellBottom>
            </CellContent>
        </Cell>
    );
};
