import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { Wrap, AuthorRanking, AuthorRankingHeader } from './style';
import UserFollowItem from '../UserFollowItem';

export default props => {
    const { activeUserList = [] } = props;
    return (
        <Wrap>
            <AuthorRanking>
                <AuthorRankingHeader>
                    <span>活跃用户</span>
                </AuthorRankingHeader>
                <List>
                    <ListItem>
                        {activeUserList.map(item => (
                            <UserFollowItem item={item} key={item.id}></UserFollowItem>
                        ))}
                    </ListItem>
                </List>
            </AuthorRanking>
        </Wrap>
    );
};
