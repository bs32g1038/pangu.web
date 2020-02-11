import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Email from '@material-ui/icons/Email';
import LockOutlined from '@material-ui/icons/Lock';
import InputAdornment from '@material-ui/core/InputAdornment';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Router, { useRouter } from 'next/router';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { TextField } from 'formik-material-ui';
import { Formik } from 'formik';
import { Form } from './style';
import { login } from '../../utils/auth';

import { Wrap, Logo, Footer, OauthBox, Oauth, OauthBg, PromptBox, AgreementBox, IconSnackbarContent } from './style';

export const LOGIN_TYPE = {
    login: 'login',
    register: 'register',
};

const registerUser = (email, password) => {
    return axios.post('/v1/api/user/register', {
        email,
        password,
    });
};

const loginUser = (email, password) => {
    return axios.post('/v1/api/user/login', {
        email,
        password,
    });
};

export interface SimpleDialogProps {
    open: boolean;
    onClose: () => void;
    type: string;
    key: string;
}

export default (props: any) => {
    const [type, setType] = useState(props.type);
    const [isShowErrorTip, setShowErrorTip] = useState(false);

    const handleClose = () => {
        setShowErrorTip(false);
    };
    const router = useRouter();
    useEffect(() => {
        if (router.pathname.includes('login')) {
            setType(LOGIN_TYPE.login);
        } else {
            setType(LOGIN_TYPE.register);
        }
    }, [router.pathname]);

    return (
        <Wrap>
            <Link href="/">
                <Logo>
                    <img src={require('../../assets/logo.svg')} alt="盘古社区"></img>
                    <div>盘古社区</div>
                </Logo>
            </Link>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                }}
                validate={(values: any) => {
                    const errors: any = {};
                    if (!values.email) {
                        errors.email = '请输入email!';
                    }
                    if (!values.password) {
                        errors.password = '请输入密码!';
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    if (type === LOGIN_TYPE.login) {
                        loginUser(values.email, values.password).then(res => {
                            login({
                                token: {
                                    id: res.data.data.id,
                                    account: res.data.data.account,
                                    username: res.data.data.username,
                                    avatar: res.data.data.avatar,
                                },
                            });
                        });
                    } else {
                        registerUser(values.email, values.password).then(res => {
                            Router.push('/login');
                        });
                    }
                }}
            >
                {({ errors, submitForm, isSubmitting }) => (
                    <Form>
                        <Typography variant="h6">{type === LOGIN_TYPE.login ? '登录' : '注册'}</Typography>
                        {isShowErrorTip && (
                            <IconSnackbarContent
                                variant="error"
                                message={''}
                                onClose={handleClose}
                            ></IconSnackbarContent>
                        )}
                        <div>
                            <TextField
                                className="email"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                label="邮箱"
                                id="email"
                                name="email"
                                placeholder="请输入邮箱"
                                fullWidth
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <Email style={{ fill: 'rgba(0,0,0,0.65)' }} />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            <TextField
                                className="password"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                type="password"
                                label="密码"
                                placeholder="请输入密码"
                                name="password"
                                fullWidth
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <LockOutlined style={{ fill: 'rgba(0,0,0,0.65)' }} />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </div>
                        <Footer>
                            {type === LOGIN_TYPE.login ? (
                                <Button
                                    variant="contained"
                                    size="medium"
                                    color="primary"
                                    fullWidth
                                    onClick={submitForm}
                                >
                                    登录
                                </Button>
                            ) : (
                                <Button
                                    variant="contained"
                                    size="medium"
                                    color="primary"
                                    fullWidth
                                    onClick={submitForm}
                                >
                                    注册
                                </Button>
                            )}
                        </Footer>
                        {type === LOGIN_TYPE.login ? (
                            <PromptBox>
                                没有账号？
                                <a className="clickable" onClick={() => Router.replace('/register')}>
                                    注册
                                </a>
                            </PromptBox>
                        ) : (
                            <PromptBox>
                                <a className="clickable" onClick={() => Router.replace('/login')}>
                                    已有账号登录
                                </a>
                            </PromptBox>
                        )}
                        <OauthBox>
                            <div className="hint">第三方账号登录：</div>
                            <Oauth>
                                <OauthBg>
                                    <IconButton size="medium" color="primary">
                                        <svg
                                            className="MuiSvgIcon-root"
                                            focusable="false"
                                            viewBox="0 0 24 24"
                                            aria-hidden="true"
                                            role="presentation"
                                        >
                                            <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3"></path>
                                        </svg>
                                    </IconButton>
                                </OauthBg>
                            </Oauth>
                        </OauthBox>
                        <AgreementBox>
                            注册登录即表示同意
                            <a href="/terms" target="_blank">
                                用户协议
                            </a>
                            、
                            <a href="/privacy" target="_blank">
                                隐私政策
                            </a>
                        </AgreementBox>
                    </Form>
                )}
            </Formik>
        </Wrap>
    );
};
