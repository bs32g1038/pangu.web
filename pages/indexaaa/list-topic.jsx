import React, { useState } from 'react';
import './style.scss';
import styles from './style.module.scss';
import Pagination from '../../components/Pagination';
import { Link, withRouter } from 'react-router-dom';
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

function a11yProps(index) {
    return {
        id: `nav-tab-${index}`,
        'aria-controls': `nav-tabpanel-${index}`,
    };
}

function LinkTab(props) {
    return <Tab className={styles.tab} component={Link} {...props} />;
}

const getLinkTabs = props => {
    let basePath = '';
    if (props.match.params.nodeId) {
        basePath = '/n/' + props.match.params.nodeId;
    }
    return [
        {
            icon: <AllSvg className={styles.icon} />,
            label: '全部',
            to: basePath + '/t/all',
        },
        {
            icon: <EssenceSvg className={styles.icon} />,
            label: '精华',
            to: basePath + '/t/popular',
        },
        {
            icon: <ShareSvg className={styles.icon} />,
            label: '分享',
            to: basePath + '/t/share',
        },
        {
            icon: <IssueSvg className={styles.icon} />,
            label: '问答',
            to: basePath + '/t/issue',
        },
        {
            icon: <RecruitSvg className={styles.icon} />,
            label: '招聘',
            to: basePath + '/t/recruit',
        },
    ];
};

const C = props => {
    let tabIndex = 0;
    const linkTabs = getLinkTabs(props);
    linkTabs.map((item, index) => {
        if (item.to === props.location.pathname) {
            tabIndex = index;
            return tabIndex;
        }
    });
    const [value] = useState(tabIndex);
    const {
        listTopic = {
            count: 0,
            rows: [],
        },
    } = props;
    return (
        <div className={styles.panel}>
            <div className={styles.tabsWrap}>
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
            </div>
            <div id="topic_list">
                {listTopic.rows.map(item => (
                    <div className={styles.cell} key={item.id}>
                        <Link className={styles.userAvatar} to={`/user/${item.user && item.user.account}`}>
                            <img src={item.user && item.user.avatar} title={item.user && item.user.username} />
                        </Link>
                        <div className={styles.cellContent}>
                            <div className={styles.cellHeader}>
                                <span
                                    className={styles.sign}
                                    style={
                                        item.top
                                            ? {
                                                  backgroundColor: '#80bd01',
                                                  color: '#fff',
                                              }
                                            : {}
                                    }
                                >
                                    {item.top ? '置顶' : TOPIC_TYPE[item.type]}
                                </span>
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
        </div>
    );
};

export default withRouter(C);
