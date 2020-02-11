import React from 'react';
import _UserFollowList from '../../../components/UserFollowList';
import styled from 'styled-components';

const UserFollowList = styled(_UserFollowList)`
    display: flex;
    background-color: #fff;
    flex: 1 0 auto;
`;

export default props => {
    const { rows = [] } = props;
    const userList = rows.map(item => item.followUser);
    return <UserFollowList userList={userList} isHiddenFollowButton={true}></UserFollowList>;
};
