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
                    {listTopic.rows.map(item => (
                        <div className="cell" key={item.id}>
                            <a className="user_avatar pull-left" href={`/user/${item.user && item.user.username}`}>
                                <img src={item.user && item.user.avatar} title={item.user && item.user.username} />
                            </a>
                            <div className="cell-content">
                                <div className="cell-header">
                                    <div className="topic_title_wrapper">
                                        <span className="put_top">
                                            {item.top ? '置顶' : item.label && item.label.name}
                                        </span>
                                        {item.good && <span className="put_top">精华</span>}
                                        <Link className="topic_title" to={`/topic/${item.id}`} title={item.title}>
                                            {item.title}
                                        </Link>
                                        <a className="last_time pull-right" href={`/topic/${item.id}`}>
                                            <img className="user_small_avatar" src={item.user && item.user.avatar} />
                                            <span style={{ fontSize: '12px', color: '#333' }}>
                                                {timeAgo(item.lastRepliedAt)}{' '}
                                            </span>
                                        </a>
                                    </div>
                                </div>
                                <div className="cell-bottom">
                                    <span className="author">作者：{item.user && item.user.username}</span>
                                    <span className="time">
                                        发布于: {timeAgo(item.createdAt)} ⁝ 浏览: {item.visitCount}
                                    </span>
                                    <a className="last_time pull-right" href={`/topic/${item.id}`}>
                                        <span className="fly-list-nums">
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
