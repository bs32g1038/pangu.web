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
import CreateIcon from '@material-ui/icons/Create';
import HomeOutlined from '@material-ui/icons/HomeOutlined';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import dynamic from 'next/dynamic';
const Menu = dynamic(() => import('./Menu'), { ssr: false });

export default () => {
    return (
        <Container>
            <Link href="/">
                <HeaderTitleLink>
                    <img src={require('../../assets/logo.svg')} alt="盘古社区" className="logo" />
                    <HeaderTitle>盘古社区</HeaderTitle>
                </HeaderTitleLink>
            </Link>
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
                <Menu></Menu>
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
