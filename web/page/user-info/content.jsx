import React from 'react';
import styles from './style.module.scss';
import GithubSvg from '../../components/svgs/github';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';

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
    return (
        <Tab
            component="a"
            onClick={event => {
                event.preventDefault();
            }}
            {...props}
        />
    );
}

function createData(calories, topic) {
    return { calories, topic };
}

const rows = [createData('分享', '在 Rails 项目中使用 Docker 和 GitLab CI 高效构建镜像 (第一部分)')];

export default () => {
    const [value, setValue] = React.useState(0);
    function handleChange(event, newValue) {
        setValue(newValue);
    }
    return (
        <div className={styles.container}>
            <div className={styles.infoWrap}>
                <div className={styles.personInfo}>
                    <div className={styles.personInfoLeft}>
                        <div className="avatar media-left mr-3">
                            <div className="image">
                                <img
                                    className="media-object avatar-96"
                                    src="https://l.ruby-china.com/user/avatar/31653/a327a5.jpg!lg"
                                />
                            </div>
                        </div>
                        <div className={styles.personInfoBody}>
                            <div className={styles.authorName}>
                                sunjirui (小点电工)
                                <span className={styles.tag}>明星会员</span>
                            </div>
                            <div className="item number">
                                第 31653 位会员 / <span title="注册日期">2017-05-24</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.personInfoRight}>
                        <GithubSvg></GithubSvg>
                    </div>
                </div>
                <div className={styles.statisticalData}>
                    <div className={styles.dataItem} data-login="sunjirui">
                        <a className={styles.counter} href="/sunjirui/followers">
                            5
                        </a>
                        <a className={styles.text} href="/sunjirui/followers">
                            篇帖子
                        </a>
                    </div>
                    <div className={styles.dataItem} data-login="sunjirui">
                        <a className={styles.counter} href="/sunjirui/followers">
                            14
                        </a>
                        <a className={styles.text} href="/sunjirui/followers">
                            条回帖
                        </a>
                    </div>
                    <div className={styles.dataItem} data-login="sunjirui">
                        <a className={styles.counter} href="/sunjirui/followers">
                            1
                        </a>
                        <a className={styles.text} href="/sunjirui/followers">
                            关注者
                        </a>
                    </div>
                    <div className={styles.dataItem}>
                        <a className={styles.counter} href="/sunjirui/following">
                            0
                        </a>
                        <a className={styles.text} href="/sunjirui/following">
                            正在关注
                        </a>
                    </div>
                    <div className={styles.dataItem}>
                        <a className={styles.counter} href="/sunjirui/favorites">
                            129
                        </a>
                        <a className={styles.text} href="/sunjirui/favorites">
                            收藏
                        </a>
                    </div>
                </div>
                <div className={styles.tabsWrap}>
                    <Tabs variant="fullWidth" value={value} onChange={handleChange} aria-label="nav tabs example">
                        <LinkTab label="创建的话题" href="/drafts" {...a11yProps(0)} />
                        <LinkTab label="最近回帖" href="/trash" {...a11yProps(1)} />
                        <LinkTab label="收藏" href="/spam" {...a11yProps(2)} />
                        <LinkTab label="正在关注" href="/spam" {...a11yProps(3)} />
                        <LinkTab label="关注者" href="/spam" {...a11yProps(4)} />
                    </Tabs>
                </div>
                <TabPanel value={value} index={0}>
                    <div>
                        <div className="cell">
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
                                        <Button variant="contained" color="primary" size="small">
                                            编辑
                                        </Button>
                                        <Button variant="contained" color="danger" size="small">
                                            删除
                                        </Button>
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
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <div>
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
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <Table className={styles.table}>
                        <TableBody>
                            {rows.map(row => (
                                <TableRow key={row.name}>
                                    <TableCell align="right">{row.calories}</TableCell>
                                    <TableCell align="right">
                                        <a href="#" className="src">
                                            {row.topic}
                                        </a>
                                    </TableCell>
                                    <TableCell align="right">
                                        <Button variant="contained" color="primary" size="small">
                                            取消关注
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TabPanel>
                <TabPanel value={value} index={3}>
                    Page Three
                </TabPanel>
                <TabPanel value={value} index={4}>
                    Page Three
                </TabPanel>
            </div>
        </div>
    );
};
