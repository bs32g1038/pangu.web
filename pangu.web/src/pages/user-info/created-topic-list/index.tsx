import React from 'react';
import Link from 'next/link';
import CommentSvg from '@material-ui/icons/Message';
import { timeAgo } from '../../../libs/time';
import TopSvg from '../../../libs/svgs/top';
import GoodSvg from '../../../libs/svgs/good';
import styled from 'styled-components';
import FaceIcon from '@material-ui/icons/Face';
import TimelapseIcon from '@material-ui/icons/Timelapse';
import AppsIcon from '@material-ui/icons/Apps';
import WhatshotIcon from '@material-ui/icons/Whatshot';

const Cell = styled.div`
    padding-right: 10px;
    background: #fff;
    border-bottom: 1px dashed #f0f0f0;
    display: flex;
    width: 100%;
    position: relative;
    padding: 20px 25px 20px;
    font-size: 14px;
    align-items: center;
    &:first-child {
        padding-top: 10px;
    }
    &:last-child {
        border-bottom: none;
    }
    .last-time {
        text-align: right;
        margin-right: 10px;
    }
    .author {
        margin-right: 10px;
        display: flex;
        align-items: center;
    }
    .time {
        display: flex;
        align-items: center;
    }
    .comment-num {
        color: rgba(0, 0, 0, 0.65);
        text-align: right;
        margin-right: 10px;
    }
    .visit {
        flex: 1 0 auto;
        display: flex;
        align-items: center;
    }
`;

const UserAvatar = styled.a`
    margin-right: 13px;
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
    >svg{
        color: #657786;
        fill: #657786;
        margin-right: 6px;
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
    text-overflow: ellipsis;
    margin-right: 10px;
    cursor: pointer;
`;

const CellBottom = styled.div`
    display: flex;
    align-items: center;
    margin-top: 0.8em;
    color: rgba(0, 0, 0, 0.45);
    svg {
        color: #657786;
        fill: #657786;
        margin-right: 6px;
        width: 14px;
    }
    span {
        margin-right: 10px;
    }
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
        category: {
            id: string;
            name: string;
        };
        tags: {
            id: string;
            name: string;
            icon: string;
        }[];
        lastReplyUser?: {
            id: string;
            account: string;
            avatar: string;
        };
    };
}

const Tags = styled.div`
    padding-top: 20px;
    display: flex;
    align-items: center;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.45);
    svg {
        color: #657786;
        fill: #657786;
        margin-right: 6px;
    }
    .MuiChip-root {
        margin-right: 10px;
    }
    img {
        max-height: 14px;
        margin-right: 4px;
    }

    a {
        margin-left: 10px;
        display: flex;
        align-items: center;
        :hover {
            color: rgb(92, 134, 139);
            cursor: pointer;
            text-decoration: underline;
        }
    }
`;

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
                    {item.top && (
                        <span className="author">
                            <TopSvg width="14" />
                            置顶
                        </span>
                    )}
                    {item.good && (
                        <span>
                            <GoodSvg width="14" />
                            精华
                        </span>
                    )}
                    <span className="author">
                        <FaceIcon></FaceIcon>
                        作者 {item.user && item.user.username}
                    </span>
                    <span className="time">
                        <TimelapseIcon></TimelapseIcon>发布于{timeAgo(item.createdAt)}
                    </span>
                    <span className="time">
                        <AppsIcon></AppsIcon>分类 {item.category && item.category.name}
                    </span>
                    <span className="visit">
                        <WhatshotIcon></WhatshotIcon>热度 {item.visitCount}
                    </span>
                    <Link href={`/topic/${item.id}`}>
                        <a className="comment-num">
                            <CommentSvg style={{ fontSize: '14px' }}></CommentSvg> {item.replyCount}
                        </a>
                    </Link>
                </CellBottom>
                {item.tags && item.tags.length > 0 && (
                    <Tags>
                        <svg viewBox="0 0 32 32" height="14" width="14">
                            <path d="M8 4v28l10-10 10 10v-28h-20zM24 0h-20v28l2-2v-24h18v-2z"></path>
                        </svg>
                        标签
                        {item.tags.map((item: any) => (
                            <a key={item.id}>
                                <img src={item.icon} alt={item.name} />
                                {item.name}
                            </a>
                        ))}
                    </Tags>
                )}
            </CellContent>
        </Cell>
    );
};
