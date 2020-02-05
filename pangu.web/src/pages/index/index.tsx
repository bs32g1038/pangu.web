import React from 'react';

import App from '../../layouts/app';
import Pagination from '../../components/Pagination';
import axios from '../../utils/axios';
import AppsIcon from '@material-ui/icons/Apps';

import { Panel, PaginationWrap, FilterPanel, CategoryList, FilterTable } from './style';

import TopicItem from './topic-item';

const Page = ({ pagedTopics, categories }) => {
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
                                    <a href="forum-801-1.html" className="active">
                                        全部
                                    </a>
                                </li>
                                {categories.map((item: any) => (
                                    <li key={item.id}>
                                        <span className="pipe">|</span>
                                        <a title="求助：20526" href={item.id}>
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </CategoryList>
                        <FilterTable>
                            <tbody>
                                <tr>
                                    <th>筛选</th>
                                    <td style={{ width: 100 }}>
                                        <div className="z">
                                            <a id="filter_special" className="showmenu_miui xi2">
                                                综合
                                            </a>
                                            &nbsp;&nbsp;
                                            <a id="filter_threadtimes" className="showmenu_miui a_g">
                                                精华
                                            </a>
                                            &nbsp;&nbsp;
                                        </div>
                                    </td>
                                    <th>排序</th>
                                    <td>
                                        <a
                                            href="forum.php?mod=forumdisplay&amp;fid=801&amp;filter=heat&amp;orderby=heats"
                                            className=""
                                        >
                                            热门
                                        </a>
                                        &nbsp;&nbsp;
                                        <a
                                            href="forum.php?mod=forumdisplay&amp;fid=801&amp;filter=lastpost&amp;finethread=1"
                                            className=""
                                        >
                                            发帖时间
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </FilterTable>
                    </FilterPanel>
                    <Panel>
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
        </App>
    );
};

Page.getInitialProps = async context => {
    const { page = 1, nodeId = '', tab = 'all' } = context.query;
    const [pagedTopics = { rows: [], count: 0 }, categories = []] = await Promise.all([
        axios.get('/v1/api/topics', { params: { page, nodeId, tab } }).then(res => res.data.data),
        axios.get('/v1/api/categories').then(res => res.data.data.rows),
    ]);
    return {
        pagedTopics,
        categories,
    };
};

export default Page;
