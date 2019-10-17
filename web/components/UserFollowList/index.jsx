import React from 'react';
import { UserFollowList } from './style';
import UserFollowItem from './item';

export default props => {
    const { userList = [], isHiddenFollowButton = false, isFollow = false } = props;
    return (
        <UserFollowList className={props.className}>
            {userList.map(item => (
                <UserFollowItem
                    item={item}
                    key={item.id}
                    isHiddenFollowButton={isHiddenFollowButton}
                    isFollow={isFollow}
                ></UserFollowItem>
            ))}
        </UserFollowList>
    );
};
