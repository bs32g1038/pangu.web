import React from 'react';
import axios from '../../utils/axios';

import './style.scss';
import styles from './style.module.scss';
import AppHeader from '../../components/AppHeader';
import AppBottom from '../../components/AppBottom';
import AppIntruduce from '../../components/AppIntruduce';
import AuthorRanking from '../../components/AuthorRanking';
import AppFooter from '../../components/AppFooter';
import AppLeftSidebar from '../../components/AppLeftSidebar';
import ListTopic from './list-topic';

const Page = props => {
    const { listTopic, activeUserList, nodes } = props;
    return (
        <React.Fragment>
            <AppHeader></AppHeader>
            <div style={{ display: 'flex', width: '812px', margin: '0 auto' }}>
                <AppLeftSidebar nodes={nodes}></AppLeftSidebar>
                <div>
                    <AppIntruduce></AppIntruduce>
                    <ListTopic listTopic={listTopic}></ListTopic>
                </div>
            </div>
            <AuthorRanking activeUserList={activeUserList}></AuthorRanking>
            <AppBottom></AppBottom>
            <AppFooter></AppFooter>
        </React.Fragment>
    );
};

Page.getInitialProps = async ctx => {
    const { query, match } = ctx;
    const params = {};
    if (query) {
        params.tab = query.tab;
        params.nodeId = query.nodeId;
    } else {
        params.tab = match.params.tab;
        params.nodeId = match.params.nodeId;
    }
    const [listTopic, activeUserList, nodes] = await Promise.all([
        axios
            .get('/v1/api/topics', {
                params,
            })
            .then(res => res.data.data),
        axios.get('/v1/api/getActiveUserList').then(res => res.data.data),
        axios.get('/v1/api/nodes').then(res => res.data.data),
    ]);
    return {
        listTopic,
        activeUserList,
        nodes,
    };
};

export default Page;
