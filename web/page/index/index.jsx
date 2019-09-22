import React from 'react';
import axios from '../../utils/axios';

import './style.scss';
import AppHeader from '../../components/AppHeader';
import AppBottom from '../../components/AppBottom';
import AppIntruduce from '../../components/AppIntruduce';
import AuthorRanking from '../../components/AuthorRanking';
import AppFooter from '../../components/AppFooter';
import AppLeftSidebar from '../../components/AppLeftSidebar';
import ListTopic from './list-topic';

const Page = props => {
    const { listTopic, activeUserList } = props;
    return (
        <React.Fragment>
            <AppHeader></AppHeader>
            <div style={{ display: 'flex', width: '812px', margin: '0 auto' }}>
                <AppLeftSidebar></AppLeftSidebar>
                <div>
                    <AppIntruduce></AppIntruduce>
                    <ListTopic listTopic={listTopic}></ListTopic>
                    <AuthorRanking activeUserList={activeUserList}></AuthorRanking>
                    <AppBottom></AppBottom>
                    <AppFooter></AppFooter>
                </div>
            </div>
        </React.Fragment>
    );
};

Page.getInitialProps = async ctx => {
    const [listTopic, activeUserList] = await Promise.all([
        axios.get('/v1/api/topics').then(res => res.data),
        axios.get('/v1/api/getActiveUserList').then(res => res.data),
    ]);
    return {
        listTopic,
        activeUserList,
    };
};

export default Page;
