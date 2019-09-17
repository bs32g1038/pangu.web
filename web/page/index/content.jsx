import React from 'react';
import './style.scss';
import styles from './style.module.scss';
import Pagination from '../../components/Pagination';
import { Link } from 'react-router-dom';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AllSvg from '../../components/svgs/all';
import EssenceSvg from '../../components/svgs/essence';
import ShareSvg from '../../components/svgs/share';
import IssueSvg from '../../components/svgs/issue';
import RecruitSvg from '../../components/svgs/recruit';
import CommentSvg from '@material-ui/icons/Message';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`nav-tabpanel-${index}`}
            aria-labelledby={`nav-tab-${index}`}
            {...other}
        >
            {children}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `nav-tab-${index}`,
        'aria-controls': `nav-tabpanel-${index}`,
    };
}

function LinkTab(props) {
    return <Tab className={styles.tab} component={Link} {...props} />;
}

export default () => {
    const [value, setValue] = React.useState(0);
    function handleChange(event, newValue) {
        setValue(() => {
            return newValue;
        });
    }
    return (
        <div className={styles.panel}>
            <div className={styles.tabsWrap}>
                <Tabs variant="fullWidth" value={value} onChange={handleChange} aria-label="nav tabs example">
                    <LinkTab icon={<AllSvg className={styles.icon} />} label="全部" to="/" {...a11yProps(0)} />
                    <LinkTab
                        icon={<EssenceSvg className={styles.icon} />}
                        label="精华"
                        to="/t/popular"
                        {...a11yProps(1)}
                    />
                    <LinkTab icon={<ShareSvg className={styles.icon} />} label="分享" to="/t/share" {...a11yProps(2)} />
                    <LinkTab icon={<IssueSvg className={styles.icon} />} label="问答" to="/t/issue" {...a11yProps(3)} />
                    <LinkTab
                        icon={<RecruitSvg className={styles.icon} />}
                        label="招聘"
                        to="/t/recurit"
                        {...a11yProps(4)}
                    />
                </Tabs>
            </div>
            <TabPanel value={value} index={0}>
                <div id="topic_list">
                    <div className="cell">
                        <a className="user_avatar pull-left" href="/user/atian25">
                            <img src="https://avatars2.githubusercontent.com/u/227713?v=4&amp;s=120" title="atian25" />
                        </a>
                        <div className="cell-content">
                            <div className="cell-header">
                                <div className="topic_title_wrapper">
                                    <span className="put_top">置顶</span>
                                    <Link
                                        className="topic_title"
                                        to="/topic/5cbfd9aca86ae80ce64b3175"
                                        title="Node 12 值得关注的新特性"
                                    >
                                        Node 12 值得关注的新特性
                                    </Link>
                                    <a
                                        className="last_time pull-right"
                                        href="/topic/5bd4772a14e994202cd5bdb7#5d563ddd697873456c6bde16"
                                    >
                                        <img
                                            className="user_small_avatar"
                                            src="https://avatars1.githubusercontent.com/u/43810527?v=4&amp;s=120"
                                        />
                                        <span style={{ fontSize: '12px', color: '#333' }}> 3 小时前</span>
                                    </a>
                                </div>
                            </div>
                            <div className="cell-bottom">
                                <span className="author">作者：atian25</span>
                                <span className="time">发布于:1月前 ⁝ 浏览: 73</span>
                                <a
                                    className="last_time pull-right"
                                    href="/topic/5bd4772a14e994202cd5bdb7#5d563ddd697873456c6bde16"
                                >
                                    {/* <span className="last_active_time">16 天前</span> */}
                                    <span className="fly-list-nums">
                                        <CommentSvg style={{ fontSize: '14px' }}></CommentSvg> 10
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className={styles.paginationWrap}>
                        <Pagination
                            pages={[
                                { text: '上一页' },
                                { text: 1 },
                                { text: 2 },
                                { active: true, text: 3 },
                                { text: 4 },
                                { text: 5 },
                                { text: '下一页' },
                            ]}
                            color="info"
                        />
                    </div> */}
            </TabPanel>
            <TabPanel value={value} index={1}>
                Page Three
            </TabPanel>
            <TabPanel value={value} index={2}>
                Page Three
            </TabPanel>
            <TabPanel value={value} index={3}>
                Page Three
            </TabPanel>
            <TabPanel value={value} index={4}>
                Page Three
            </TabPanel>
        </div>
    );
};
