import React, { useEffect } from 'react';
import AppHeader from '../../components/AppHeader';
import AppFooter from '../../components/AppFooter';
import { getUserByUsername } from '../../api/user';
import styles from './style.module.scss';
import GithubSvg from '../../components/svgs/github';
import { Link } from 'react-router-dom';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import { timeAgo, parseTime } from '../../utils/time';
import { fetchTopicListByUserId, getCollectTopic } from '../../api/topic';
import { fetchFollowUsers, fetchFollowingUsers } from '../../api/user';
import { fetchReplyTopicList } from '../../api/reply';
import CommentSvg from '@material-ui/icons/Message';
import { TOPIC_TYPE, USER_DEFAULT_SIGNATUR } from '../../configs/constant';
import ReplyTopicList from './reply-topic-list';
import Follow from './follow';
import Following from './following';
import FollowButton from '../../components/FollowButton';
import { getLoginInfo } from '../../utils/oauth';

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
    return <Tab component="span" {...props} />;
}

function createData(calories, topic) {
    return { calories, topic };
}

const rows = [createData('分享', '在 Rails 项目中使用 Docker 和 GitLab CI 高效构建镜像 (第一部分)')];

const Page = props => {
    const userInfo = getLoginInfo();
    const [value, setValue] = React.useState(0);
    const [_topics, setTopics] = React.useState(null);
    const [topicCollects, setTopicCollects] = React.useState({
        count: 0,
        rows: [],
    });
    const [replyTopicList, setReplyTopicList] = React.useState({
        count: 0,
        rows: [],
    });
    const [followUserList, setFollowUserList] = React.useState({
        count: 0,
        rows: [],
    });
    const [followingUserList, setFollowingUserList] = React.useState({
        count: 0,
        rows: [],
    });
    const { user = {} } = props;
    const topics = _topics ||
        props.topics || {
            count: 0,
            rows: [],
        };

    function handleChange(event, newValue) {
        setValue(newValue);
        switch (newValue) {
            case 0:
                return fetchTopicListByUserId(user.id).then(res => {
                    setTopics(res.data.data);
                });
            case 1:
                return fetchReplyTopicList(1, 100, { userId: user.id }).then(res => {
                    setReplyTopicList(res.data.data);
                });
            case 2:
                return getCollectTopic().then(res => {
                    setTopicCollects(res.data.data);
                });
            case 3:
                return fetchFollowUsers(1, 100, { userId: user.id }).then(res => {
                    setFollowUserList(res.data.data);
                });
            case 4:
                return fetchFollowingUsers(1, 100, { followUserId: user.id }).then(res => {
                    setFollowingUserList(res.data.data);
                });
        }
    }
    return (
        <React.Fragment>
            <AppHeader></AppHeader>
            <div className={styles.container}>
                <div className={styles.infoWrap}>
                    <div className={styles.personInfo}>
                        <div className={styles.personInfoLeft}>
                            <div className="avatar media-left mr-3">
                                <div className="image">
                                    <img className="media-object avatar-96" src={user.avatar} />
                                </div>
                            </div>
                            <div className={styles.personInfoBody}>
                                <div className={styles.authorName}>
                                    {user.username || user.account}
                                    <span className={styles.tag}>明星会员</span>
                                </div>
                                <div className="item number">
                                    第 {user.id} 位会员 / <span title="注册日期">{parseTime(user.createdAt)}</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.personInfoRight}>
                            <GithubSvg></GithubSvg>
                            <FollowButton
                                isFollow={user.isFollow}
                                userId={user.id}
                                followUserId={userInfo.id}
                            ></FollowButton>
                        </div>
                    </div>
                    <div className={styles.detail}>
                        <p>
                            <strong>个性签名：</strong>
                            {user.signature || USER_DEFAULT_SIGNATUR}
                        </p>
                        <p>
                            <strong>所在城市：</strong>
                            {user.location}
                        </p>
                        <p>
                            <strong>个人邮箱：</strong>
                            {user.email}
                        </p>
                    </div>
                    <div className={styles.statisticalData}>
                        <div className={styles.dataItem}>
                            <a className={styles.counter}>{user.topicCount}</a>
                            <a className={styles.text}>篇帖子</a>
                        </div>
                        <div className={styles.dataItem}>
                            <a className={styles.counter}>{user.replyCount}</a>
                            <a className={styles.text}>条回帖</a>
                        </div>
                        <div className={styles.dataItem}>
                            <a className={styles.counter}>{user.followerCount}</a>
                            <a className={styles.text}>关注者</a>
                        </div>
                        <div className={styles.dataItem}>
                            <a className={styles.counter}>{user.followingCount}</a>
                            <a className={styles.text}>正在关注</a>
                        </div>
                        <div className={styles.dataItem}>
                            <a className={styles.counter}>{user.collectTopicCount}</a>
                            <a className={styles.text}>收藏</a>
                        </div>
                    </div>
                    <div className={styles.tabsWrap}>
                        <Tabs variant="fullWidth" value={value} onChange={handleChange} aria-label="nav tabs example">
                            <LinkTab label="创建的话题" {...a11yProps(0)} />
                            <LinkTab label="最近回帖" {...a11yProps(1)} />
                            <LinkTab label="收藏" {...a11yProps(2)} />
                            <LinkTab label="关注者" {...a11yProps(3)} />
                            <LinkTab label="正在关注" {...a11yProps(4)} />
                        </Tabs>
                    </div>
                    <TabPanel value={value} index={0}>
                        {topics.rows.map(item => (
                            <div className={styles.cell} key={item.id}>
                                <div className={styles.cellContent}>
                                    <div className={styles.cellHeader}>
                                        <div className="topic_title_wrapper">
                                            <span className="put_top">{item.top ? '置顶' : TOPIC_TYPE[item.type]}</span>
                                            {item.good && <span className="put_top">精华</span>}
                                            <Link className="topic_title" to={`/topic/${item.id}`} title={item.title}>
                                                {item.title}
                                            </Link>
                                        </div>
                                    </div>
                                    <div className={styles.cellBottom}>
                                        <span className={styles.author}>
                                            作者：{item.user && item.user.username} ⁝{' '}
                                        </span>
                                        <span className={styles.time}>
                                            发布于：{timeAgo(item.createdAt)} ⁝ 节点：{item.node && item.node.name} ⁝
                                            浏览:
                                            {item.visitCount} ⁝ 评论：{item.replyCount}
                                        </span>
                                    </div>
                                </div>
                                <div className={styles.control}>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        size="small"
                                        component={Link}
                                        to={`/write?topicId=${item.id}`}
                                    >
                                        编辑
                                    </Button>
                                    <Button variant="contained" color="secondary" size="small">
                                        删除
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        {replyTopicList.rows.map(item => (
                            <ReplyTopicList key={item.id} item={item}></ReplyTopicList>
                        ))}
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <Table className={styles.table}>
                            <TableBody>
                                {topicCollects.rows.map(item => (
                                    <TableRow key={item.id}>
                                        <TableCell align="right">
                                            <Link to={`/n/${item.topic.node.id}/t/all`}>
                                                节点：{item.topic.node.name}
                                            </Link>
                                        </TableCell>
                                        <TableCell align="right">
                                            <div className="topic_title_wrapper">
                                                <span className="put_top">
                                                    {item.topic.top ? '置顶' : TOPIC_TYPE[item.topic.type]}
                                                </span>
                                                {item.topic.good && <span className="put_top">精华</span>}
                                                <Link
                                                    className="topic_title"
                                                    to={`/topic/${item.topic.id}`}
                                                    title={item.topic.title}
                                                >
                                                    {item.topic.title}
                                                </Link>
                                            </div>
                                        </TableCell>
                                        <TableCell align="right">
                                            <Button variant="contained" color="primary" size="small">
                                                取消收藏
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TabPanel>
                    <TabPanel value={value} index={3}>
                        <Follow rows={followUserList.rows}></Follow>
                    </TabPanel>
                    <TabPanel value={value} index={4}>
                        <Following rows={followingUserList.rows}></Following>
                    </TabPanel>
                </div>
            </div>
            <AppFooter
                footerStyle={{
                    width: 812,
                }}
            ></AppFooter>
        </React.Fragment>
    );
};

Page.getInitialProps = async ctx => {
    const { query, match } = ctx;
    const params = {};
    if (query) {
        params.username = query.username;
    } else {
        params.username = match.params.username;
    }
    const user = await getUserByUsername(params.username).then(res => res.data.data);
    if (user) {
        const topics = await fetchTopicListByUserId(user.id).then(res => res.data.data);
        return {
            topics,
            user,
        };
    }
    return {
        user,
    };
};

export default Page;
