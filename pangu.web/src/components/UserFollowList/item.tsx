import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import { UserItem, UserItemHeader, UserItemBottom } from './style';
// import { follow, cancelFollow } from '../../api/follow';
import { getLoginInfo } from '../../utils/oauth';

export default props => {
    const item = props.item;
    const isHiddenFollowButton = props.isHiddenFollowButton;
    const [isFollow, setIsFollow] = useState(item.isFollow || props.isFollow);
    const userInfo = getLoginInfo();
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
                    {!isHiddenFollowButton &&
                        (isFollow ? (
                            <Button
                                variant="outlined"
                                size="small"
                                color="secondary"
                                onClick={() => {
                                    // cancelFollow({
                                    //     userId: item.id,
                                    //     followUserId: userInfo.id,
                                    // }).then(res => {
                                    //     setIsFollow(false);
                                    // });
                                }}
                            >
                                取消关注
                            </Button>
                        ) : (
                            <Button
                                variant="outlined"
                                size="small"
                                color="primary"
                                onClick={() => {
                                    // follow({
                                    //     userId: item.id,
                                    //     followUserId: userInfo.id,
                                    // }).then(res => {
                                    //     setIsFollow(true);
                                    // });
                                }}
                            >
                                关注
                            </Button>
                        ))}
                    <span style={{ marginLeft: 6 }}>积分：{item.score}</span>
                </UserItemBottom>
            </React.Fragment>
        </UserItem>
    );
};
