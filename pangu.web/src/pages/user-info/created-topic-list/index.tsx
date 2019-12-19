import React from 'react';
import Link from 'next/link';
import { TOPIC_TYPE } from '../../../configs/constant';
import { timeAgo } from '../../../libs/time';

import { Cell, UserAvatar, CellContent, CellHeader, CellBottom, Sign, TopicTitleWrap, UserSmallAvatar } from './styles';

export default item => {
    return (
        <Cell>
            <Link href={`/user/${item.user && item.user.account}`} passHref={true}>
                <UserAvatar>
                    <img src={item.user && item.user.avatar} title={item.user && item.user.username} />
                </UserAvatar>
            </Link>
            <CellContent>
                <CellHeader>
                    <div className="item_title_wrapper">
                        <Sign style={item.top ? { backgroundColor: '#80bd01', color: '#fff' } : {}}>
                            {item.top ? '置顶' : TOPIC_TYPE[item.type]}
                        </Sign>
                        {item.good && <Sign>精华</Sign>}
                        <Link href={`/item/${item.id}`} passHref={true}>
                            <TopicTitleWrap title={item.title}>{item.title}</TopicTitleWrap>
                        </Link>
                    </div>
                    {item.lastReplyUser ? (
                        <a className="last-time" href={`/item/${item.id}`}>
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
                </CellBottom>
            </CellContent>
        </Cell>
    );
};
