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
import { getLoginInfo } from '../../utils/oauth';
// import { LOGIN_TYPE } from '../../components/LoginDialog';
export const LOGIN_TYPE = {
    login: 'login',
    register: 'register',
};
import dynamic from 'next/dynamic';
const LoginDialog = dynamic(() => import('../../components/LoginDialog'), { ssr: false });

export default () => {
    const userInfo = getLoginInfo();
    const [open, setOpen] = React.useState(false);
    const [loginType, setLoginType] = React.useState('');

    const handleClickOpen = (type: string) => {
        setOpen(true);
        setLoginType(type);
    };

    const handleClose = () => {
        setOpen(false);
    };

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
                {/* <li>
                    <AppMenuUserInfoDropdown userInfo={userInfo}></AppMenuUserInfoDropdown>
                </li> */}
                <li>
                    <Button size="small" title="注册" onClick={() => handleClickOpen(LOGIN_TYPE.register)}>
                        <FaceIcon fontSize="small"></FaceIcon>注册
                    </Button>
                </li>
                <li>
                    <Button size="small" title="登录" onClick={() => handleClickOpen(LOGIN_TYPE.login)}>
                        <PersonIcon></PersonIcon>登录
                    </Button>
                </li>
                <li>
                    <Link href="/write">
                        <Button size="small" title="写话题">
                            <CreateIcon fontSize="small"></CreateIcon>写话题
                        </Button>
                    </Link>
                </li>
                <LoginDialog key={loginType} type={loginType} open={open} onClose={handleClose}></LoginDialog>
            </HeaderControlWrap>
        </Container>
    );
};
