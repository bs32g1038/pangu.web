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
import { timeAgo } from '../../utils/time';
import { TOPIC_TYPE } from '../../configs/constant';

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

export default props => {
    const [value, setValue] = React.useState(0);
    function handleChange(event, newValue) {
        setValue(() => {
            return newValue;
        });
    }
    const {
        listTopic = {
            count: 0,
            rows: [],
        },
    } = props;
    return (
        <div className={styles.panel}>
            <div className={styles.tabsWrap}>
                <Tabs variant="fullWidth" value={value} onChange={handleChange} aria-label="nav tabs example">
                    <LinkTab icon={<AllSvg className={styles.icon} />} label="全部" to="/t/all" {...a11yProps(0)} />
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
                    {listTopic.rows.map(item => (
                        <div className={styles.cell} key={item.id}>
                            <a className={styles.userAvatar} href={`/user/${item.user && item.user.username}`}>
                                <img src={item.user && item.user.avatar} title={item.user && item.user.username} />
                            </a>
                            <div className={styles.cellContent}>
                                <div className={styles.cellHeader}>
                                    <span className={styles.sign}>{item.top ? '置顶' : TOPIC_TYPE[item.type]}</span>
                                    {item.good && <span className={styles.sign}>精华</span>}
                                    <div className={styles.topicTitleWrap}>
                                        <Link className={styles.topicTitle} to={`/topic/${item.id}`} title={item.title}>
                                            {item.title}
                                        </Link>
                                    </div>
                                    {item.lastReplyUser ? (
                                        <a className={styles.lastTime} href={`/topic/${item.id}`}>
                                            <img className={styles.userSmallAvatar} src={item.user && item.user.avatar} />
                                            <span style={{ fontSize: '12px', color: '#333' }}>
                                                {timeAgo(item.lastRepliedAt)}{' '}
                                            </span>
                                        </a>
                                    ) : (
                                        <span className={styles.lastTime} style={{ fontSize: '12px', color: '#333' }}>
                                            {timeAgo(item.createdAt)}
                                        </span>
                                    )}
                                </div>
                                <div className={styles.cellBottom}>
                                    <span className={styles.author}>作者：{item.user && item.user.username} ⁝ </span>
                                    <span className={styles.time}>
                                        发布于: {timeAgo(item.createdAt)} ⁝ 节点: {item.node && item.node.name} ⁝ 浏览:
                                        {item.visitCount}
                                    </span>
                                    <a className={styles.lastTime} href={`/topic/${item.id}`}>
                                        <span className={styles.commentNum}>
                                            <CommentSvg style={{ fontSize: '14px' }}></CommentSvg> {item.replyCount}
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={styles.paginationWrap}>
                    <Pagination color="info" count={listTopic.count} />
                </div>
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
