import React from 'react';
import { TOPIC_TYPE } from '../../../configs/constant';
import { Link } from 'react-router-dom';
import { timeAgo } from '../../../utils/time';
import styled from 'styled-components';
import indigo from '@material-ui/core/colors/indigo';

const TopicItem = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    position: relative;
    padding: 10px 0 10px 10px;
    font-size: 14px;
`;

const UserAvatar = styled.div`
    margin-right: 8px;
    max-width: 40px;
    min-width: 40px;
`;

const TopicItemContent = styled.div`
    width: 100%;
`;

const CellHeader = styled.div`
    flex: 1 0 auto;
    display: flex;
    align-items: center;
    .topic_title {
        &:hover {
            text-decoration: underline;
            outline-offset: -2px;
        }
    }
`;

const CellBottom = styled.div`
    display: flex;
    align-items: center;
    margin-left: 7px;
    margin-top: 0.8em;
    color: rgba(0, 0, 0, 0.45);
`;

const Author = styled(Link)`
    margin-right: 10px;
    color: rgba(0, 0, 0, 0.45);
`;

const Meta = styled.div`
    flex: 1 0 auto;
`;

export default props => {
    const item = props.item;
    return (
        <TopicItem {...props}>
            <UserAvatar to={`/user/${item.user && item.user.account}`}>
                <img src={item.user && item.user.avatar} title={item.user && item.user.username} />
            </UserAvatar>
            <TopicItemContent>
                <CellHeader>
                    <span className="put_top">{item.top ? '置顶' : TOPIC_TYPE[item.type]}</span>
                    {item.good && <span className="put_top">精华</span>}
                    <Link className="topic_title" to={`/topic/${item.id}`} title={item.title}>
                        {item.title}
                    </Link>
                </CellHeader>
                <CellBottom>
                    <Author to={`/user/${item.user && item.user.username}`} title={item.user && item.user.username}>
                        作者：
                        <span style={{ color: indigo[500] }}>{item.user && item.user.username}</span>
                    </Author>
                    <Meta>
                        发布于：{timeAgo(item.createdAt)} ⁝ 节点：
                        {item.node && item.node.name} ⁝ 浏览：
                        {item.visitCount} ⁝ 评论：{item.replyCount} ⁝ 最后更新时间：{timeAgo(item.updatedAt)}
                    </Meta>
                </CellBottom>
            </TopicItemContent>
        </TopicItem>
    );
};
