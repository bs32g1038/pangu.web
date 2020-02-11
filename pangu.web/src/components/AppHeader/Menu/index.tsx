import React, { useEffect } from 'react';
import { Button } from '../styles';
import AppMenuUserInfoDropdown from '../../AppMenuUserInfoDropdown';
import PersonIcon from '@material-ui/icons/Person';
import FaceIcon from '@material-ui/icons/Face';
import Router from 'next/router';
import { getUserInfoFromCookie, logout } from '../../../utils/auth';
import NotificationsIcon from '@material-ui/icons/Notifications';
import IconButton from '@material-ui/core/IconButton';
import { useSelector, useDispatch } from 'react-redux';
import { fetchLoginStatus, RootState, postLogout } from '../../../store';
export default () => {
    const userInfo = getUserInfoFromCookie();
    const $global = useSelector((state: RootState) => state.$global);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchLoginStatus());
    }, [1]);
    return $global.isLogin ? (
        <>
            <li>
                <AppMenuUserInfoDropdown
                    logout={async () => {
                        await dispatch(postLogout());
                        logout();
                    }}
                    userInfo={userInfo}
                ></AppMenuUserInfoDropdown>
            </li>
            <li>
                <IconButton className="notification" size="small" title="通知">
                    <NotificationsIcon></NotificationsIcon>
                </IconButton>
            </li>
        </>
    ) : (
        <>
            <li>
                <Button size="small" title="注册" onClick={() => Router.push('/register')}>
                    <FaceIcon fontSize="small"></FaceIcon>注册
                </Button>
            </li>
            <li>
                <Button size="small" title="登录" onClick={() => Router.push('/login')}>
                    <PersonIcon></PersonIcon>登录
                </Button>
            </li>
        </>
    );
};
