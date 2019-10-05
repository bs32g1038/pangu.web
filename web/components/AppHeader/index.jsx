import React, { useState } from 'react';
import styles from './style.module.scss';
import { Link } from 'react-router-dom';
import {
    Container,
    HeaderTitle,
    HeaderTitleLink,
    HeaderNavWrap,
    HeaderNavItem,
    Button,
    HeaderControlWrap,
    Search,
    SearchIcon,
    SearchInput,
} from './styles';
import AppMenuUserInfoDropdown from '../AppMenuUserInfoDropdown';

import { getLoginInfo } from '../../utils/oauth';

export default () => {
    const userInfo = getLoginInfo();
    return (
        <div id="drawer" className="App-drawer">
            <Container>
                <HeaderTitle>
                    <HeaderTitleLink to="/">
                        <img src={require('./logo.svg')} alt="盘古社区" className="logo" />
                        <span className="site-name">盘古社区</span>
                    </HeaderTitleLink>
                </HeaderTitle>
                <HeaderNavWrap>
                    <HeaderNavItem>
                        <Button size="small" title="主页" component={Link} to="/">
                            主页
                        </Button>
                    </HeaderNavItem>
                    <HeaderNavItem>
                        <Button size="small" title="文档" component={Link} to="/docs">
                            文档
                        </Button>
                    </HeaderNavItem>
                </HeaderNavWrap>
                <HeaderControlWrap>
                    <li>
                        <Search>
                            <SearchIcon />
                            <SearchInput placeholder="搜索" inputProps={{ 'aria-label': 'search' }} />
                        </Search>
                    </li>
                    <li>
                        <AppMenuUserInfoDropdown userInfo={userInfo}></AppMenuUserInfoDropdown>
                    </li>
                    {/* <li className="item-signUp">
                            <Button size="small" component={Link} title="注册" className={styles.button} to="/register">
                                注册
                            </Button>
                        </li>
                        <li className="item-logIn" style={{ marginRight: '20px' }}>
                            <Button size="small" component={Link} title="Log In" className={styles.button} to="/login">
                                登录
                            </Button>
                        </li> */}
                    <li>
                        <Button
                            size="small"
                            variant="outlined"
                            color="primary"
                            title="发布新话题"
                            className="write"
                            component={Link}
                            to="/write"
                        >
                            发布新话题
                        </Button>
                    </li>
                </HeaderControlWrap>
            </Container>
        </div>
    );
};
