import React from 'react';

import App from '../../layouts/app';
import axios from '../../utils/axios';
import AppsIcon from '@material-ui/icons/Apps';
import Link from 'next/link';
import { Panel, PaginationWrap, FilterPanel, CategoryList } from './style';
import RegularFilter from '../../components/RegularFilter';
import Pagination from '../../components/Pagination';
import TopicItem from './topic-item';

const Page = ({ page, pageSize, pagedTopics, categories, activeMenuId }) => {
    return (
        <App>
            <div style={{ display: 'flex', flex: '1 0 auto' }}>
                <div style={{ flex: '1 0 auto', background: '#fff' }}>
                    <FilterPanel>
                        <div className="drag"></div>
                        <CategoryList>
                            <AppsIcon fontSize="small"></AppsIcon>
                            <span>分类&gt;&gt;</span>
                            <ul id="thread_types" className="ttp bm cl">
                                <li id="ttp_all" className="xw1 a">
                                    <Link href="/">
                                        <a className={activeMenuId === '' ? 'active' : ''}>全部</a>
                                    </Link>
                                </li>
                                {categories.map((item: any) => (
                                    <li key={item.id}>
                                        <span className="pipe">|</span>
                                        <Link href={`?list=${item.id}`}>
                                            <a title={item.name} className={activeMenuId == item.id ? 'active' : ''}>
                                                {item.name}
                                            </a>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </CategoryList>
                        <RegularFilter></RegularFilter>
                    </FilterPanel>
                    <Panel>
                        <div>
                            {pagedTopics.rows.map(item => (
                                <TopicItem key={item.id} item={item}></TopicItem>
                            ))}
                        </div>
                        {pagedTopics.count / pageSize > 1 && (
                            <PaginationWrap>
                                <Pagination
                                    pageSize={pageSize}
                                    current={page}
                                    total={pagedTopics.count as number}
                                ></Pagination>
                            </PaginationWrap>
                        )}
                    </Panel>
                </div>
            </div>
        </App>
    );
};

Page.getInitialProps = async context => {
    const { page = 1, pageSize = 2, list = '', good = '' } = context.query;
    const [pagedTopics = { rows: [], count: 0 }, categories = []] = await Promise.all([
        axios.get('/v1/api/topics', { params: { page, list, good, limit: pageSize } }).then(res => res.data.data),
        axios.get('/v1/api/categories').then(res => res.data.data.rows),
    ]);
    return {
        page,
        pageSize,
        pagedTopics,
        categories,
        activeMenuId: list,
    };
};

export default Page;
