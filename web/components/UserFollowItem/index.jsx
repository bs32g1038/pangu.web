import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import { UserItem, UserItemHeader, UserItemBottom } from './style';

export default props => {
    const item = props.item;
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
                    {item.isFollow ? (
                        <Button variant="outlined" size="small" color="secondary">
                            取消关注
                        </Button>
                    ) : (
                        <Button variant="outlined" size="small" color="primary">
                            关注
                        </Button>
                    )}
                    <span style={{ marginLeft: 6 }}>积分：{item.score}</span>
                </UserItemBottom>
            </React.Fragment>
        </UserItem>
    );
};
