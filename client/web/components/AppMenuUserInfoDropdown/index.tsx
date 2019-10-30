import React from 'react';

import _Button from '@material-ui/core/Button';
import _Avatar from '@material-ui/core/Avatar';
import _Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ViewComfyIcon from '@material-ui/icons/ViewComfy';
import styled from 'styled-components';
import Router from 'next/router';

const MemuWrap = styled.div`
    display: inline-block;
    vertical-align: middle;
`;

const Button = styled(_Button)`
    &.MuiButton-root {
        text-transform: none;
    }
`;

const Avatar = styled(_Avatar)`
    &.MuiAvatar-root {
        width: 24px;
        height: 24px;
        margin-right: 5px;
        text-transform: none;
    }
`;

const Menu = styled(_Menu)`
    .MuiMenuItem-root {
        font-size: 14px;
        color: rgba(0, 0, 0, 0.65);
    }
    svg {
        margin-right: 5px;
    }
`;

export default props => {
    const userInfo = props.userInfo || {};

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <MemuWrap>
            <Button onClick={handleClick}>
                <Avatar alt={userInfo.username} src={userInfo.avatar} />
                {userInfo.username}
            </Button>
            <Menu anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
                <MenuItem onClick={() => Router.push('/user/' + userInfo.account)}>
                    <AccountCircleIcon fontSize="small"></AccountCircleIcon>
                    个人中心
                </MenuItem>
                <MenuItem onClick={() => Router.push('/admin/index')}>
                    <ViewComfyIcon fontSize="small"></ViewComfyIcon>
                    后台管理
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <ExitToAppIcon fontSize="small"></ExitToAppIcon> 退出登录
                </MenuItem>
            </Menu>
        </MemuWrap>
    );
};
