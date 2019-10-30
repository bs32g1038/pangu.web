import React from 'react';
import Link from 'next/link';
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

import HomeOutlined from '@material-ui/icons/HomeOutlined';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';

import { getLoginInfo } from '@pangu/client/web/utils/oauth';

export default () => {
    const userInfo = getLoginInfo();
    return (
        <Container>
            <HeaderTitle>
                <Link href="/">
                    <HeaderTitleLink>
                        <img src={require('@pangu/client/web/assets/logo.svg')} alt="盘古社区" className="logo" />
                        <h1 className="site-name">盘古社区</h1>
                    </HeaderTitleLink>
                </Link>
            </HeaderTitle>
            <HeaderNavWrap>
                <HeaderNavItem>
                    <Link href="/">
                        <Button size="small" title="主页">
                            <HomeOutlined></HomeOutlined>主页
                        </Button>
                    </Link>
                </HeaderNavItem>
                <HeaderNavItem>
                    <Link href="/docs">
                        <Button size="small" title="文档">
                            <LibraryBooksIcon fontSize="small"></LibraryBooksIcon>文档
                        </Button>
                    </Link>
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
                    <Link href="/write">
                        <Button size="small" variant="outlined" color="primary" title="发布新话题" className="write">
                            发布新话题
                        </Button>
                    </Link>
                </li>
            </HeaderControlWrap>
        </Container>
    );
};
