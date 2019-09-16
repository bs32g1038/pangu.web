import React from 'react';
import styles from './style.module.scss';
import AllSvg from '../svgs/all';
import EssenceSvg from '../svgs/essence';
import ShareSvg from '../svgs/share';
import IssueSvg from '../svgs/issue';
import RecruitSvg from '../svgs/recruit';
import Button from '@material-ui/core';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
export default () => {
    return (
        <ul className={styles.menu}>
            <li className="item-allDiscussions">
                <Button href="/" className={styles.menuActive} type="button" title="All Discussions">
                    <AllSvg className={styles.icon}></AllSvg>
                    <span className="Button-label">全部</span>
                </Button>
            </li>
            <li className="item-tag20">
                <Button
                    className="TagLinkButton hasIcon "
                    href="/t/popular"
                    title="Test out Flarum in this tag. Discussions in this tag will be deleted every so often."
                >
                    <EssenceSvg className={styles.icon}></EssenceSvg>精华
                </Button>
            </li>
            <li className="item-tag24">
                <Button
                    className="TagLinkButton hasIcon "
                    href="/t/share"
                    title="Get help setting up, using, and customising Flarum."
                >
                    <ShareSvg className={styles.icon}></ShareSvg>分享
                </Button>
            </li>
            <li className="item-tag69">
                <Button
                    className="TagLinkButton hasIcon "
                    href="/t/issue"
                    title="For discussing Flarum core features and design. For issues use Support."
                >
                    <IssueSvg className={styles.icon}></IssueSvg>问答
                </Button>
            </li>
            <li className="item-tag48">
                <Button
                    className="TagLinkButton hasIcon "
                    href="/t/recurit"
                    title="Announce your extensions and provide help to users in this area. For requests/ideas, post in Feedback. For help building extensions, post in Dev > Extensibility."
                >
                    <RecruitSvg className={styles.icon}></RecruitSvg>招聘
                </Button>
            </li>
        </ul>
    );
};
