import React from 'react';
import _UserFollowList from '../../../components/UserFollowList';
import styled from 'styled-components';

const UserFollowList = styled(_UserFollowList)`
    display: flex;
    background-color: #fff;
    flex: 1 0 auto;
    padding-top: 20px;
    padding-bottom: 20px;
`;

export default props => {
    const { rows = [] } = props;
    let { userList = [] } = props;
    userList = rows.map(item => item.user);
    return <UserFollowList userList={userList} isFollow={true}></UserFollowList>;
};
