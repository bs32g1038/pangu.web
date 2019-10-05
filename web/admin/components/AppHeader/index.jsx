import React, { useState } from 'react';
import styles from './style.module.scss';
import Button from '@material-ui/core/Button';
import { Link, withRouter } from 'react-router-dom';
import classNames from 'classnames';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import CategoryIcon from '@material-ui/icons/Category';
import SmsOutlinedIcon from '@material-ui/icons/SmsOutlined';
import GroupOutlinedIcon from '@material-ui/icons/GroupOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import Avatar from '@material-ui/core/Avatar';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const Content = props => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const getClassName = pathname => {
        if (props.location.pathname.includes(pathname)) {
            return classNames(styles.button, styles.buttonActive);
        }
        return styles.button;
    };

    return (
        <div id="drawer" className="App-drawer">
            <header className={styles.appHeader}>
                <div className={styles.container}>
                    <h1 className={styles.HeaderTitle}>
                        <a href="/" className={styles.HeaderTitleLink}>
                            <img src={require('./logo.svg')} alt="盘古社区" className={styles.headerLogo} />
                            <span className="site-name">盘古社区</span>
                        </a>
                    </h1>
                    <div className={styles.headerPrimary}>
                        <ul className={styles.headerControls}>
                            <li>
                                <Button
                                    size="small"
                                    title="主页"
                                    className={getClassName('/admin/index')}
                                    component={Link}
                                    to="/admin/index"
                                >
                                    <DescriptionOutlinedIcon fontSize="small"></DescriptionOutlinedIcon>话题管理
                                </Button>
                            </li>
                            <li>
                                <Button
                                    size="small"
                                    title="节点管理"
                                    className={getClassName('/admin/node')}
                                    component={Link}
                                    to="/admin/node"
                                >
                                    <CategoryIcon fontSize="small"></CategoryIcon>节点管理
                                </Button>
                            </li>
                            <li>
                                <Button
                                    size="small"
                                    title="回复管理"
                                    className={getClassName('/admin/reply')}
                                    component={Link}
                                    to="/admin/reply"
                                >
                                    <SmsOutlinedIcon fontSize="small"></SmsOutlinedIcon>
                                    回复管理
                                </Button>
                            </li>
                            <li>
                                <Button
                                    size="small"
                                    title="用户管理"
                                    className={getClassName('/admin/user')}
                                    component={Link}
                                    to="/admin/user"
                                >
                                    <GroupOutlinedIcon fontSize="small"></GroupOutlinedIcon>用户管理
                                </Button>
                            </li>
                            <li>
                                <Button
                                    size="small"
                                    title="系统配置"
                                    className={getClassName('/admin/setting')}
                                    component={Link}
                                    to="/admin/setting"
                                >
                                    <SettingsOutlinedIcon fontSize="small"></SettingsOutlinedIcon>系统配置
                                </Button>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.headerSecondary}>
                        <ul className={styles.headerControls}>
                            <li className={styles.account}>
                                <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                                    <Avatar
                                        alt="Remy Sharp"
                                        src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"
                                        className={styles.avatar}
                                    />
                                    冷夜流星
                                </Button>
                                <Menu
                                    className={styles.menu}
                                    anchorEl={anchorEl}
                                    keepMounted
                                    open={Boolean(anchorEl)}
                                    onClose={handleClose}
                                    keepMounted
                                    onClose={handleClose}
                                >
                                    <MenuItem onClick={handleClose}>
                                        <AccountCircleIcon fontSize="small"></AccountCircleIcon>
                                        个人中心
                                    </MenuItem>
                                    <MenuItem onClick={handleClose}>
                                        <ExitToAppIcon fontSize="small"></ExitToAppIcon> 退出登录
                                    </MenuItem>
                                </Menu>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default withRouter(Content);
