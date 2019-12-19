import React, { useState } from 'react';

import App from '../../layouts/app';
import AppLeftSidebar from '../../components/AppLeftSidebar';
import AppIntruduce from '../../components/AppIntruduce';
import AuthorRanking from '../../components/AuthorRanking';
import Pagination from '../../components/Pagination';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AllSvg from '../../components/svgs/all';
import EssenceSvg from '../../components/svgs/essence';
import ShareSvg from '../../components/svgs/share';
import IssueSvg from '../../components/svgs/issue';
import RecruitSvg from '../../components/svgs/recruit';
import axios from '../../utils/axios';

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
                        {pagedTopics.count / 10 > 1 && (
                            <PaginationWrap>
                                <Pagination count={pagedTopics.count}></Pagination>
                            </PaginationWrap>
                        )}
                    </Panel>
                </div>
            </div>
            <AuthorRanking activeUserList={activeUserList}></AuthorRanking>
        </App>
    );
};

Page.getInitialProps = async context => {
    const { page = 1, nodeId = '', tab = 'all' } = context.query;
    const [pagedTopics = { rows: [], count: 0 }, activeUserList = [], nodes = []] = await Promise.all([
        axios.get('/v1/api/topics', { params: { page, nodeId, tab } }).then(res => res.data.data),
        axios.get('/v1/api/getActiveUserList', { params: { userId: 17 } }).then(res => res.data.data),
        axios.get('/v1/api/nodes').then(res => res.data.data),
    ]);
    return {
        pagedTopics,
        activeUserList,
        nodes,
    };
};

export default Page;
