import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { UserItem, UserItemHeader, UserItemBottom } from './style';
import dynamic from 'next/dynamic';
const FollowButton = dynamic(() => import('../../components/FollowButton'), { ssr: false });

export default props => {
    const item = props.item;
    const isHiddenFollowButton = props.isHiddenFollowButton;
    console.log(!isHiddenFollowButton, item.id);
    return (
        <UserItem key={item.id}>
            <React.Fragment>
                <UserItemHeader to={`/user/${item.account}`}>
                    <Avatar alt={item.username} src={item.avatar} />
                    <div style={{ fontSize: '14px', marginLeft: '10px' }}>
                        <h3>{item.username}</h3>
                        <p>共 {item.replyCount} 篇文章</p>
                    </div>
                </UserItemHeader>
                <UserItemBottom>
                    {!isHiddenFollowButton && <FollowButton isFollow={props.isFollow} userId={item.id}></FollowButton>}
                    <span style={{ marginLeft: 6 }}>积分：{item.score}</span>
                </UserItemBottom>
            </React.Fragment>
        </UserItem>
    );
};
