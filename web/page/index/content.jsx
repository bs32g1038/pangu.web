import React from 'react';
import './style.scss';
import styles from './style.module.scss';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import AddIcon from '@material-ui/icons/Add';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Pagination from '../../components/Pagination';
import SiderPersonInfo from '../../components/SiderPersonInfo';
import { Link } from 'react-router-dom';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AllSvg from '../../components/svgs/all';
import EssenceSvg from '../../components/svgs/essence';
import ShareSvg from '../../components/svgs/share';
import IssueSvg from '../../components/svgs/issue';
import RecruitSvg from '../../components/svgs/recruit';

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
    console.log(value);
    return (
        <div className="panel">
            <div style={{ flex: '1 0 auto' }}>
                <div className={styles.tabsWrap}>
                    <Tabs variant="fullWidth" value={value} onChange={handleChange} aria-label="nav tabs example">
                        <LinkTab icon={<AllSvg className={styles.icon} />} label="全部" to="/" {...a11yProps(0)} />
                        <LinkTab
                            icon={<EssenceSvg className={styles.icon} />}
                            label="精华"
                            to="/t/popular"
                            {...a11yProps(1)}
                        />
                        <LinkTab
                            icon={<ShareSvg className={styles.icon} />}
                            label="分享"
                            to="/t/share"
                            {...a11yProps(2)}
                        />
                        <LinkTab
                            icon={<IssueSvg className={styles.icon} />}
                            label="问答"
                            to="/t/issue"
                            {...a11yProps(3)}
                        />
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
                                <img
                                    src="https://avatars2.githubusercontent.com/u/227713?v=4&amp;s=120"
                                    title="atian25"
                                />
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
                                            <i className="icon fas fa-comment-dots Button-icon" title="回答"></i> 10
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="cell">
                            <a className="user_avatar pull-left" href="/user/atian25">
                                <img
                                    src="https://avatars2.githubusercontent.com/u/227713?v=4&amp;s=120"
                                    title="atian25"
                                />
                            </a>
                            <div className="cell-content">
                                <div className="cell-header">
                                    <div className="topic_title_wrapper">
                                        <span className="put_top">置顶</span>
                                        <a
                                            className="topic_title"
                                            href="/topic/5cbfd9aca86ae80ce64b3175"
                                            title="Node 12 值得关注的新特性"
                                        >
                                            pm2 start 任务 会导致被覆盖是什么原因，而且pm2 delete all 卡住不动
                                        </a>
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
                                            <i className="icon fas fa-comment-dots Button-icon" title="回答"></i> 10
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="cell">
                            <a className="user_avatar pull-left" href="/user/atian25">
                                <img
                                    src="https://avatars2.githubusercontent.com/u/227713?v=4&amp;s=120"
                                    title="atian25"
                                />
                            </a>
                            <div className="cell-content">
                                <div className="cell-header">
                                    <div className="topic_title_wrapper">
                                        <span className="put_top">置顶</span>
                                        <a
                                            className="topic_title"
                                            href="/topic/5cbfd9aca86ae80ce64b3175"
                                            title="Node 12 值得关注的新特性"
                                        >
                                            Node 地下铁第九期「杭州站」线下沙龙邀约 - Let's Go Deep
                                        </a>
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
                                            <i className="icon fas fa-comment-dots Button-icon" title="回答"></i> 10
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="cell">
                            <a className="user_avatar pull-left" href="/user/atian25">
                                <img
                                    src="https://avatars2.githubusercontent.com/u/227713?v=4&amp;s=120"
                                    title="atian25"
                                />
                            </a>
                            <div className="cell-content">
                                <div className="cell-header">
                                    <div className="topic_title_wrapper">
                                        <span className="put_top">置顶</span>
                                        <a
                                            className="topic_title"
                                            href="/topic/5cbfd9aca86ae80ce64b3175"
                                            title="Node 12 值得关注的新特性"
                                        >
                                            Node 地下铁第九期「杭州站」线下沙龙邀约 - Let's Go Deep
                                        </a>
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
                                            <i className="icon fas fa-comment-dots Button-icon" title="回答"></i> 10
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="cell">
                            <a className="user_avatar pull-left" href="/user/atian25">
                                <img
                                    src="https://avatars2.githubusercontent.com/u/227713?v=4&amp;s=120"
                                    title="atian25"
                                />
                            </a>
                            <div className="cell-content">
                                <div className="cell-header">
                                    <div className="topic_title_wrapper">
                                        <span className="put_top">置顶</span>
                                        <a
                                            className="topic_title"
                                            href="/topic/5cbfd9aca86ae80ce64b3175"
                                            title="Node 12 值得关注的新特性"
                                        >
                                            Node 地下铁第九期「杭州站」线下沙龙邀约 - Let's Go Deep
                                        </a>
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
                                            <i className="icon fas fa-comment-dots Button-icon" title="回答"></i> 10
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="cell">
                            <a className="user_avatar pull-left" href="/user/atian25">
                                <img
                                    src="https://avatars2.githubusercontent.com/u/227713?v=4&amp;s=120"
                                    title="atian25"
                                />
                            </a>
                            <div className="cell-content">
                                <div className="cell-header">
                                    <div className="topic_title_wrapper">
                                        <span className="put_top">置顶</span>
                                        <a
                                            className="topic_title"
                                            href="/topic/5cbfd9aca86ae80ce64b3175"
                                            title="Node 12 值得关注的新特性"
                                        >
                                            Node 地下铁第九期「杭州站」线下沙龙邀约 - Let's Go Deep
                                        </a>
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
                                            <i className="icon fas fa-comment-dots Button-icon" title="回答"></i> 10
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="cell">
                            <a className="user_avatar pull-left" href="/user/atian25">
                                <img
                                    src="https://avatars2.githubusercontent.com/u/227713?v=4&amp;s=120"
                                    title="atian25"
                                />
                            </a>
                            <div className="cell-content">
                                <div className="cell-header">
                                    <div className="topic_title_wrapper">
                                        <span className="put_top">置顶</span>
                                        <a
                                            className="topic_title"
                                            href="/topic/5cbfd9aca86ae80ce64b3175"
                                            title="Node 12 值得关注的新特性"
                                        >
                                            Node 地下铁第九期「杭州站」线下沙龙邀约 - Let's Go Deep
                                        </a>
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
                                            <i className="icon fas fa-comment-dots Button-icon" title="回答"></i> 10
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="cell">
                            <a className="user_avatar pull-left" href="/user/atian25">
                                <img
                                    src="https://avatars2.githubusercontent.com/u/227713?v=4&amp;s=120"
                                    title="atian25"
                                />
                            </a>
                            <div className="cell-content">
                                <div className="cell-header">
                                    <div className="topic_title_wrapper">
                                        <span className="put_top">置顶</span>
                                        <a
                                            className="topic_title"
                                            href="/topic/5cbfd9aca86ae80ce64b3175"
                                            title="Node 12 值得关注的新特性"
                                        >
                                            Node 地下铁第九期「杭州站」线下沙龙邀约 - Let's Go Deep
                                        </a>
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
                                            <i className="icon fas fa-comment-dots Button-icon" title="回答"></i> 10
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="cell">
                            <a className="user_avatar pull-left" href="/user/atian25">
                                <img
                                    src="https://avatars2.githubusercontent.com/u/227713?v=4&amp;s=120"
                                    title="atian25"
                                />
                            </a>
                            <div className="cell-content">
                                <div className="cell-header">
                                    <div className="topic_title_wrapper">
                                        <span className="put_top">置顶</span>
                                        <a
                                            className="topic_title"
                                            href="/topic/5cbfd9aca86ae80ce64b3175"
                                            title="Node 12 值得关注的新特性"
                                        >
                                            Node 地下铁第九期「杭州站」线下沙龙邀约 - Let's Go Deep
                                        </a>
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
                                            <i className="icon fas fa-comment-dots Button-icon" title="回答"></i> 10
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="cell">
                            <a className="user_avatar pull-left" href="/user/atian25">
                                <img
                                    src="https://avatars2.githubusercontent.com/u/227713?v=4&amp;s=120"
                                    title="atian25"
                                />
                            </a>
                            <div className="cell-content">
                                <div className="cell-header">
                                    <div className="topic_title_wrapper">
                                        <span className="put_top">置顶</span>
                                        <a
                                            className="topic_title"
                                            href="/topic/5cbfd9aca86ae80ce64b3175"
                                            title="Node 12 值得关注的新特性"
                                        >
                                            Node 地下铁第九期「杭州站」线下沙龙邀约 - Let's Go Deep
                                        </a>
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
                                            <i className="icon fas fa-comment-dots Button-icon" title="回答"></i> 10
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="cell">
                            <a className="user_avatar pull-left" href="/user/atian25">
                                <img
                                    src="https://avatars2.githubusercontent.com/u/227713?v=4&amp;s=120"
                                    title="atian25"
                                />
                            </a>
                            <div className="cell-content">
                                <div className="cell-header">
                                    <div className="topic_title_wrapper">
                                        <span className="put_top">置顶</span>
                                        <a
                                            className="topic_title"
                                            href="/topic/5cbfd9aca86ae80ce64b3175"
                                            title="Node 12 值得关注的新特性"
                                        >
                                            Node 地下铁第九期「杭州站」线下沙龙邀约 - Let's Go Deep
                                        </a>
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
                                            <i className="icon fas fa-comment-dots Button-icon" title="回答"></i> 10
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="cell">
                            <a className="user_avatar pull-left" href="/user/atian25">
                                <img
                                    src="https://avatars2.githubusercontent.com/u/227713?v=4&amp;s=120"
                                    title="atian25"
                                />
                            </a>
                            <div className="cell-content">
                                <div className="cell-header">
                                    <div className="topic_title_wrapper">
                                        <span className="put_top">置顶</span>
                                        <a
                                            className="topic_title"
                                            href="/topic/5cbfd9aca86ae80ce64b3175"
                                            title="Node 12 值得关注的新特性"
                                        >
                                            Node 地下铁第九期「杭州站」线下沙龙邀约 - Let's Go Deep
                                        </a>
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
                                            <i className="icon fas fa-comment-dots Button-icon" title="回答"></i> 10
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="cell">
                            <a className="user_avatar pull-left" href="/user/atian25">
                                <img
                                    src="https://avatars2.githubusercontent.com/u/227713?v=4&amp;s=120"
                                    title="atian25"
                                />
                            </a>
                            <div className="cell-content">
                                <div className="cell-header">
                                    <div className="topic_title_wrapper">
                                        <span className="put_top">置顶</span>
                                        <a
                                            className="topic_title"
                                            href="/topic/5cbfd9aca86ae80ce64b3175"
                                            title="Node 12 值得关注的新特性"
                                        >
                                            Node 地下铁第九期「杭州站」线下沙龙邀约 - Let's Go Deep
                                        </a>
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
                                            <i className="icon fas fa-comment-dots Button-icon" title="回答"></i> 10
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="cell">
                            <a className="user_avatar pull-left" href="/user/atian25">
                                <img
                                    src="https://avatars2.githubusercontent.com/u/227713?v=4&amp;s=120"
                                    title="atian25"
                                />
                            </a>
                            <div className="cell-content">
                                <div className="cell-header">
                                    <div className="topic_title_wrapper">
                                        <span className="put_top">置顶</span>
                                        <a
                                            className="topic_title"
                                            href="/topic/5cbfd9aca86ae80ce64b3175"
                                            title="Node 12 值得关注的新特性"
                                        >
                                            Node 地下铁第九期「杭州站」线下沙龙邀约 - Let's Go Deep
                                        </a>
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
                                            <i className="icon fas fa-comment-dots Button-icon" title="回答"></i> 10
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="cell">
                            <a className="user_avatar pull-left" href="/user/atian25">
                                <img
                                    src="https://avatars2.githubusercontent.com/u/227713?v=4&amp;s=120"
                                    title="atian25"
                                />
                            </a>
                            <div className="cell-content">
                                <div className="cell-header">
                                    <div className="topic_title_wrapper">
                                        <span className="put_top">置顶</span>
                                        <a
                                            className="topic_title"
                                            href="/topic/5cbfd9aca86ae80ce64b3175"
                                            title="Node 12 值得关注的新特性"
                                        >
                                            Node 地下铁第九期「杭州站」线下沙龙邀约 - Let's Go Deep
                                        </a>
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
                                            <i className="icon fas fa-comment-dots Button-icon" title="回答"></i> 10
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.paginationWrap}>
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
            <div className="right-panel">
                <SiderPersonInfo></SiderPersonInfo>
                <div className={styles.authorRanking}>
                    <div className={styles.authorRankingHeader}>
                        <span className="col_fade">名人榜</span>
                    </div>
                    <div className="inner">
                        <List className={styles.root}>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar
                                        alt="Remy Sharp"
                                        src="https://avatars1.githubusercontent.com/u/16550983?v=4&amp;s=120"
                                        className={styles.avatar}
                                    />
                                </ListItemAvatar>
                                <ListItemText
                                    className={styles.listItemText}
                                    primary="冷夜流星"
                                    secondary="明星会员 9800贡献"
                                />
                                <ListItemSecondaryAction>
                                    <Button size="small" className={styles.followButton}>
                                        <AddIcon fontSize="small"></AddIcon>关注
                                    </Button>
                                </ListItemSecondaryAction>
                            </ListItem>
                            <Divider variant="inset" component="li" />
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar
                                        alt="Remy Sharp"
                                        src="https://avatars1.githubusercontent.com/u/16550983?v=4&amp;s=120"
                                        className={styles.avatar}
                                    />
                                </ListItemAvatar>
                                <ListItemText
                                    className={styles.listItemText}
                                    primary="冷夜流星"
                                    secondary="明星会员 9800贡献"
                                />
                                <ListItemSecondaryAction>
                                    <Button size="small" className={styles.followButton}>
                                        <AddIcon fontSize="small"></AddIcon>关注
                                    </Button>
                                </ListItemSecondaryAction>
                            </ListItem>
                            <Divider variant="inset" component="li" />
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar
                                        alt="Remy Sharp"
                                        src="https://avatars1.githubusercontent.com/u/16550983?v=4&amp;s=120"
                                        className={styles.avatar}
                                    />
                                </ListItemAvatar>
                                <ListItemText
                                    className={styles.listItemText}
                                    primary="冷夜流星"
                                    secondary="明星会员 9800贡献"
                                />
                                <ListItemSecondaryAction>
                                    <Button size="small" className={styles.followButton}>
                                        <AddIcon fontSize="small"></AddIcon>关注
                                    </Button>
                                </ListItemSecondaryAction>
                            </ListItem>
                            <Divider variant="inset" component="li" />
                        </List>
                    </div>
                </div>
                <div className={styles.linkList}>
                    <div className={styles.linkListHeader}>友情社区</div>
                    <ul className={styles.listGroup}>
                        <li className="list-group-item">
                            <a href="http://cnodejs.org" rel="nofollow" title="CNode 社区" target="_blank">
                                <img src="//l.ruby-china.com/photo/2016/d427ef3efd33b57721df152c2aa1735e.png" />
                            </a>
                        </li>
                        <li className="list-group-item">
                            <a href="https://laravel-china.org" target="_blank" rel="nofollow">
                                <img src="//l.ruby-china.com/photo/2016/d7782871f3fac7e85a95d20c74046909.png" />
                            </a>
                        </li>
                        <a href="http://segmentfault.com" target="_blank" rel="nofollow">
                            <img src="//l.ruby-china.com/photo/2016/e91d14ee109ed066e215057ab40257b7.png" />
                        </a>
                        <li className="list-group-item">
                            <a href="https://testerhome.com/" target="_blank" rel="nofollow">
                                <img src="//l.ruby-china.com/photo/2016/5cd78b730062ab3c768bcc2592c5c7fa.png" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
