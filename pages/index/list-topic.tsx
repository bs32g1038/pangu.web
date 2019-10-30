import React, { useState } from 'react';
// import './style.scss';
import { Panel, TabsWrap } from './style';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
// import Pagination from '@pangu/client/web/components/Pagination';
import AllSvg from '@pangu/client/web/components/svgs/all';
import EssenceSvg from '@pangu/client/web/components/svgs/essence';
import ShareSvg from '@pangu/client/web/components/svgs/share';
import IssueSvg from '@pangu/client/web/components/svgs/issue';
import RecruitSvg from '@pangu/client/web/components/svgs/recruit';
import CommentSvg from '@material-ui/icons/Message';
import { timeAgo } from '@pangu/client/libs/time';
import { TOPIC_TYPE } from '@pangu/client/configs/constant';

const styles: any = {};

function a11yProps(index) {
    return {
        id: `nav-tab-${index}`,
        'aria-controls': `nav-tabpanel-${index}`,
    };
}

function LinkTab(props) {
    return (
        <Link href={props.to} passHref={true}>
            <Tab className={styles.tab} {...props} />
        </Link>
    );
}

const getLinkTabs = () => {
    let basePath = '';
    const router = useRouter();
    const { nodeId } = router.query;
    if (nodeId) {
        basePath = '/n/' + nodeId;
    }
    return [
        {
            icon: <AllSvg className="icon" />,
            label: '全部',
            to: basePath + '/t/all',
        },
        {
            icon: <EssenceSvg className="icon" />,
            label: '精华',
            to: basePath + '/t/popular',
        },
        {
            icon: <ShareSvg className="icon" />,
            label: '分享',
            to: basePath + '/t/share',
        },
        {
            icon: <IssueSvg className="icon" />,
            label: '问答',
            to: basePath + '/t/issue',
        },
        {
            icon: <RecruitSvg className="icon" />,
            label: '招聘',
            to: basePath + '/t/recruit',
        },
    ];
};

interface Props {
    pagedTopics: {
        count: number;
        rows: any[];
    };
}

export default (props: Props) => {
    let tabIndex = 0;
    const linkTabs = getLinkTabs();
    const router = useRouter();
    linkTabs.map((item, index) => {
        if (item.to === router.pathname) {
            tabIndex = index;
            return tabIndex;
        }
    });
    const [value] = useState(tabIndex);
    const {
        pagedTopics = {
            count: 0,
            rows: [],
        },
    } = props;
    return (
       
            <div id="topic_list">
                {pagedTopics.rows.map(item => (
                    <div className={styles.cell} key={item.id}>
                        <Link href={`/user/${item.user && item.user.account}`}>
                            <a className={styles.userAvatar}>
                                <img src={item.user && item.user.avatar} title={item.user && item.user.username} />
                            </a>
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
                                    <Link href={`/topic/${item.id}`}>
                                        <a className={styles.topicTitle} title={item.title}>
                                            {item.title}
                                        </a>
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
            {/* <div className={styles.paginationWrap}>
                <Pagination color="info" count={listTopic.count} />
            </div> */}
    );
};
