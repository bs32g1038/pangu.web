import React, { useEffect, useState } from 'react';
import App from '../../layouts/app';
import GithubSvg from '../../components/svgs/github';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Tabs, Tab, Table, TableBody, TableCell, TableRow, Button } from '@material-ui/core';
import { parseTime } from '../../libs/time';
import { fetchTopicListByUserId, getCollectTopic } from '../../api/topic';
import { getUserByUserAccount, fetchFollowUsers, fetchFollowingUsers } from '../../api/user';
import { fetchReplyTopicList } from '../../api/reply';
import { TOPIC_TYPE, USER_DEFAULT_SIGNATUR } from '../../configs/constant';
import ReplyTopicList from './reply-topic-list';
import CreatedTopicList from './created-topic-list';
import Follow from './follow';
import Following from './following';
import Empty from './empty';
import dynamic from 'next/dynamic';
const FollowButton = dynamic(() => import('../../components/FollowButton'), { ssr: false });
import { RootState } from '../../store';
import { useSelector } from 'react-redux';
import { getUserInfoFromCookie } from '../../utils/auth';

import {
    InfoWrap,
    StatisticalData,
    StatisticalDataItem,
    StatisticalDataItemText,
    StatisticalDataItemCounter,
    PersonInfo,
    PersonInfoBody,
    PersonInfoLeft,
    PersonInfoRight,
    Detail,
    TabsWrap,
    AuthorName,
    Tag,
    TableWrapDiv,
    TabPanelDiv,
} from './styles';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <TabPanelDiv
            hidden={value !== index}
            id={`nav-tabpanel-${index}`}
            aria-labelledby={`nav-tab-${index}`}
            {...other}
        >
            {children}
        </TabPanelDiv>
    );
}

function a11yProps(index) {
    return {
        value: index,
    };
}

function LinkTab(props) {
    return <Tab component="span" {...props} />;
}

export default props => {
    const [value, setValue] = React.useState(0);
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

    const $global = useSelector((state: RootState) => state.$global);
    const [user, setUser] = useState<any>({});
    const [topics, setTopics] = useState<any>({
        count: 0,
        rows: [],
    });

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
                return fetchFollowUsers(1, 100, { userId: user.id }).then(res => {
                    setFollowUserList(res.data.data);
                });
            case 3:
                return getCollectTopic().then(res => {
                    setTopicCollects(res.data.data);
                });
            case 4:
                return fetchFollowingUsers(1, 100, { followUserId: user.id }).then(res => {
                    setFollowingUserList(res.data.data);
                });
        }
    }

    const [isSelf, setSelf] = React.useState(false);

    const router = useRouter();
    useEffect(() => {
        const { account = '' } = router.query;
        const data = getUserInfoFromCookie();
        if (data.account === account) {
            setSelf(true);
        }
        getUserByUserAccount(account).then(res => {
            const u = res.data.data;
            setUser(u);
            if (u) {
                fetchTopicListByUserId(u.id).then(res => setTopics(res.data.data));
            }
        });
    }, [1]);

    return (
        <App>
            <InfoWrap>
                <PersonInfo>
                    <PersonInfoLeft>
                        <div className="avatar media-left mr-3">
                            <div className="image">
                                <img className="media-object avatar-96" src={user.avatar} />
                            </div>
                        </div>
                        <PersonInfoBody>
                            <AuthorName>
                                {user.username || user.account}
                                <Tag>明星会员</Tag>
                            </AuthorName>
                            <div className="item number">
                                第 {user.id} 位会员 / <span title="注册日期">{parseTime(user.createdAt)}</span>
                            </div>
                        </PersonInfoBody>
                    </PersonInfoLeft>
                    <PersonInfoRight>
                        <GithubSvg></GithubSvg>
                        <FollowButton isFollow={user.isFollow} userId={user.id}></FollowButton>
                    </PersonInfoRight>
                </PersonInfo>
                <Detail>
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
                </Detail>
                <StatisticalData>
                    <StatisticalDataItem>
                        <StatisticalDataItemCounter>{user.topicCount}</StatisticalDataItemCounter>
                        <StatisticalDataItemText>篇帖子</StatisticalDataItemText>
                    </StatisticalDataItem>
                    <StatisticalDataItem>
                        <StatisticalDataItemCounter>{user.replyCount}</StatisticalDataItemCounter>
                        <StatisticalDataItemText>条回帖</StatisticalDataItemText>
                    </StatisticalDataItem>
                    <StatisticalDataItem>
                        <StatisticalDataItemCounter>{user.followerCount}</StatisticalDataItemCounter>
                        <StatisticalDataItemText>关注者</StatisticalDataItemText>
                    </StatisticalDataItem>
                    <StatisticalDataItem>
                        <StatisticalDataItemCounter>{user.followingCount}</StatisticalDataItemCounter>
                        <StatisticalDataItemText>正在关注</StatisticalDataItemText>
                    </StatisticalDataItem>
                    <StatisticalDataItem>
                        <StatisticalDataItemCounter>{user.collectTopicCount}</StatisticalDataItemCounter>
                        <StatisticalDataItemText>收藏</StatisticalDataItemText>
                    </StatisticalDataItem>
                </StatisticalData>
                <TabsWrap>
                    <Tabs variant="fullWidth" value={value} onChange={handleChange} aria-label="nav tabs example">
                        <LinkTab label="创建的话题" {...a11yProps(0)} />
                        <LinkTab label="最近回帖" {...a11yProps(1)} />
                        <LinkTab label="关注者" {...a11yProps(2)} />
                        {$global.isLogin && isSelf && <LinkTab label="收藏" {...a11yProps(3)} />}
                        {$global.isLogin && isSelf && <LinkTab label="正在关注" {...a11yProps(4)} />}
                    </Tabs>
                </TabsWrap>
                <TabPanel value={value} index={0}>
                    {topics.rows.map(item => (
                        <CreatedTopicList key={item.id} item={item}></CreatedTopicList>
                    ))}
                    {topics.count <= 0 && <Empty />}
                </TabPanel>
                <TabPanel value={value} index={1}>
                    {replyTopicList.rows.map(item => (
                        <ReplyTopicList key={item.id} item={item}></ReplyTopicList>
                    ))}
                    {replyTopicList.count <= 0 && <Empty />}
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <Follow rows={followUserList.rows}></Follow>
                    {followUserList.count <= 0 && <Empty />}
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <TableWrapDiv>
                        <Table>
                            <TableBody>
                                {topicCollects.rows.map(item => (
                                    <TableRow key={item.id}>
                                        <TableCell align="right">
                                            <Link href={`/n/${item.topic.node.id}/t/all`}>
                                                <a>节点：{item.topic.node.name}</a>
                                            </Link>
                                        </TableCell>
                                        <TableCell align="right">
                                            <div className="topic_title_wrapper">
                                                <span className="put_top">
                                                    {item.topic.top ? '置顶' : TOPIC_TYPE[item.topic.type]}
                                                </span>
                                                {item.topic.good && <span className="put_top">精华</span>}
                                                <Link href={`/topic/${item.topic.id}`}>
                                                    <a className="topic_title" title={item.topic.title}>
                                                        {item.topic.title}
                                                    </a>
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
                    </TableWrapDiv>
                </TabPanel>
                <TabPanel value={value} index={4}>
                    <Following rows={followingUserList.rows}></Following>
                    {followingUserList.count <= 0 && <Empty />}
                </TabPanel>
            </InfoWrap>
        </App>
    );
};
