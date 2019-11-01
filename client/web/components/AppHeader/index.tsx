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
import CreateIcon from '@material-ui/icons/Create';
import HomeOutlined from '@material-ui/icons/HomeOutlined';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import FaceIcon from '@material-ui/icons/Face';
import PersonIcon from '@material-ui/icons/Person';
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
                {/* <li>
                    <AppMenuUserInfoDropdown userInfo={userInfo}></AppMenuUserInfoDropdown>
                </li> */}
                <li>
                    <Link href="/register">
                        <Button size="small" title="注册">
                            <FaceIcon fontSize="small"></FaceIcon>注册
                        </Button>
                    </Link>
                </li>
                <li>
                    <Link href="/login">
                        <Button size="small" title="登录">
                            <PersonIcon></PersonIcon>登录
                        </Button>
                    </Link>
                </li>
                <li>
                    <Link href="/write">
                        <Button size="small" title="写话题">
                            <CreateIcon fontSize="small"></CreateIcon>写话题
                        </Button>
                    </Link>
                </li>
            </HeaderControlWrap>
        </Container>
    );
};
