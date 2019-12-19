import React, { useState, useEffect } from 'react';
import { Drawer, IconButton, List } from '@material-ui/core';
import {
    Home as HomeIcon,
    FilterNone as UIElementsIcon,
    QuestionAnswer as SupportIcon,
    HelpOutline as FAQIcon,
    ArrowBack as ArrowBackIcon,
    Description as DescriptionIcon,
    SupervisedUserCircle as SupervisedUserCircleIcon,
    CommentSharp as CommentSharpIcon,
    Settings as SettingsIcon,
    Category as CategoryIcon,
} from '@material-ui/icons';
import { useTheme } from '@material-ui/styles';
import classNames from 'classnames';

// styles
import useStyles from './styles';

// components
import SidebarLink from './components/SidebarLink/SidebarLink';

// context
import { useLayoutState, useLayoutDispatch, toggleSidebar } from '../../context/LayoutContext';

const structure = [
    { id: 0, label: 'Dashboard', link: '/admin/dashboard', icon: <HomeIcon /> },
    {
        id: 1,
        label: '文章管理',
        link: '/admin/articles',
        icon: <DescriptionIcon />,
    },
    {
        id: 2,
        label: '节点管理',
        link: '/admin/nodes',
        icon: <CategoryIcon />,
    },
    { id: 3, label: '评论管理', link: '/admin/comments', icon: <CommentSharpIcon /> },
    {
        id: 4,
        label: '用户管理',
        link: '/admin/users',
        icon: <SupervisedUserCircleIcon />,
    },
    {
        id: 5,
        label: '广告管理',
        link: '/admin/advs',
        icon: <UIElementsIcon />,
    },
    { id: 6, type: 'divider' },
    { id: 7, type: 'title', label: '系统' },
    { id: 8, label: '系统配置', link: '', icon: <SettingsIcon /> },
    { id: 9, label: '黑名单管理', link: '', icon: <SupportIcon /> }
];

function Sidebar(props) {
    const {
        location = {
            pathname: '/admin',
        },
    } = props;
    const classes: any = useStyles();
    const theme: any = useTheme();

    // global
    const { isSidebarOpened = true } = useLayoutState() as any;
    const layoutDispatch = useLayoutDispatch();

    // local
    const [isPermanent, setPermanent] = useState(true);

    useEffect(function() {
        window.addEventListener('resize', handleWindowWidthChange);
        handleWindowWidthChange();
        return function cleanup() {
            window.removeEventListener('resize', handleWindowWidthChange);
        };
    });

    return (
        <Drawer
            variant={isPermanent ? 'permanent' : 'temporary'}
            className={classNames(classes.drawer, {
                [classes.drawerOpen]: isSidebarOpened,
                [classes.drawerClose]: !isSidebarOpened,
            })}
            classes={{
                paper: classNames({
                    [classes.drawerOpen]: isSidebarOpened,
                    [classes.drawerClose]: !isSidebarOpened,
                }),
            }}
            open={isSidebarOpened}
        >
            <div className={classes.toolbar}>盘古后台管理系统</div>
            <div className={classes.mobileBackButton}>
                <IconButton onClick={() => toggleSidebar(layoutDispatch)}>
                    <ArrowBackIcon
                        classes={{
                            root: classNames(classes.headerIcon, classes.headerIconCollapse),
                        }}
                    />
                </IconButton>
            </div>
            <List className={classes.sidebarList}>
                {structure.map(link => (
                    <SidebarLink key={link.id} location={location} isSidebarOpened={isSidebarOpened} {...link} />
                ))}
            </List>
        </Drawer>
    );

    // ##################################################################
    function handleWindowWidthChange() {
        const windowWidth = window.innerWidth;
        const breakpointWidth = theme.breakpoints.values.md;
        const isSmallScreen = windowWidth < breakpointWidth;

        if (isSmallScreen && isPermanent) {
            setPermanent(false);
        } else if (!isSmallScreen && !isPermanent) {
            setPermanent(true);
        }
    }
}

export default Sidebar;
