import React, { useState } from 'react';

import { withApollo } from '@pangu/client/libs/apollo';
import App from '@pangu/client/web/layouts/app';
import AppLeftSidebar from '@pangu/client/web/components/AppLeftSidebar';
import AppIntruduce from '@pangu/client/web/components/AppIntruduce';
import AuthorRanking from '@pangu/client/web/components/AuthorRanking';
import Pagination from '@pangu/client/web/components/Pagination';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AllSvg from '@pangu/client/web/components/svgs/all';
import EssenceSvg from '@pangu/client/web/components/svgs/essence';
import ShareSvg from '@pangu/client/web/components/svgs/share';
import IssueSvg from '@pangu/client/web/components/svgs/issue';
import RecruitSvg from '@pangu/client/web/components/svgs/recruit';
import Query from '@pangu/client/libs/graphql-query';
import queryGql from '@pangu/client/web/pages/index/query-gql';

import { Panel, TabsWrap, PaginationWrap } from './style';

import TopicItem from './topic-item';

function a11yProps(index) {
    return {
        id: `nav-tab-${index}`,
        'aria-controls': `nav-tabpanel-${index}`,
    };
}

function LinkTab(props) {
    return (
        <Link href={props.to} passHref={true}>
            <Tab {...props} />
        </Link>
    );
}

const getLinkTabs = () => {
    let basePath = '';
    const router = useRouter();
    const { nodeId } = router.query;
    if (nodeId) {
        basePath = '/n/' + nodeId;
    }
    return [
        {
            icon: <AllSvg className="icon" />,
            label: '全部',
            to: basePath + '/t/all',
        },
        {
            icon: <EssenceSvg className="icon" />,
            label: '精华',
            to: basePath + '/t/popular',
        },
        {
            icon: <ShareSvg className="icon" />,
            label: '分享',
            to: basePath + '/t/share',
        },
        {
            icon: <IssueSvg className="icon" />,
            label: '问答',
            to: basePath + '/t/issue',
        },
        {
            icon: <RecruitSvg className="icon" />,
            label: '招聘',
            to: basePath + '/t/recruit',
        },
    ];
};

const Page = ({ pagedTopics, nodes, activeUserList }) => {
    let tabIndex = 0;
    const linkTabs = getLinkTabs();
    const router = useRouter();
    linkTabs.map((item, index) => {
        if (item.to === router.asPath) {
            tabIndex = index;
            return tabIndex;
        }
    });
    const [value] = useState(tabIndex);
    return (
        <App>
            <div style={{ display: 'flex', flex: '1 0 auto' }}>
                <AppLeftSidebar nodes={nodes}></AppLeftSidebar>
                <div style={{ flex: '1 0 auto' }}>
                    <AppIntruduce></AppIntruduce>
                    <Panel>
                        <TabsWrap>
                            <Tabs variant="fullWidth" value={value}>
                                {linkTabs.map((item, index) => (
                                    <LinkTab
                                        key={'link-tabs' + item.to}
                                        icon={item.icon}
                                        label={item.label}
                                        to={item.to}
                                        {...a11yProps(index)}
                                    />
                                ))}
                            </Tabs>
                        </TabsWrap>
                        <div>
                            {pagedTopics.rows.map(item => (
                                <TopicItem key={item.id} item={item}></TopicItem>
                            ))}
                        </div>
                        <PaginationWrap>
                            <Pagination count={pagedTopics.count}></Pagination>
                        </PaginationWrap>
                    </Panel>
                </div>
            </div>
            <AuthorRanking activeUserList={activeUserList}></AuthorRanking>
        </App>
    );
};

Page.getInitialProps = async context => {
    const { page = 1, nodeId = '', tab = 'all' } = context.query;
    try {
        const { data } = await Query(context.apolloClient, queryGql, {
            page,
            limit: 10,
            nodeId,
            tab,
            userId: '',
        });
        return { pagedTopics: data.pagedTopics, nodes: data.nodes, activeUserList: data.users };
    } catch (error) {
        console.log(error);
    }
};

export default withApollo(Page);
