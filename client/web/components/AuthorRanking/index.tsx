import React from 'react';
import { AuthorRanking, AuthorRankingHeader } from './style';
import UserFollowList from '../UserFollowList';

export default props => {
    const { activeUserList = [] } = props;
    return (
        <AuthorRanking>
            <AuthorRankingHeader>
                <span>活跃用户</span>
            </AuthorRankingHeader>
            <UserFollowList userList={activeUserList}></UserFollowList>
        </AuthorRanking>
    );
};
