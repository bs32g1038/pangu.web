import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Email from '@material-ui/icons/Email';
import LockOutlined from '@material-ui/icons/Lock';
import InputAdornment from '@material-ui/core/InputAdornment';
import CustomInput from '../../components/CustomInput';
import axios from 'axios';
import * as oauth from '../../utils/oauth';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import {
    Wrap,
    Logo,
    CloseButton,
    Form,
    Footer,
    OauthBox,
    Oauth,
    OauthBg,
    PromptBox,
    AgreementBox,
    IconSnackbarContent,
} from './style';

export const LOGIN_TYPE = {
    login: 'login',
    register: 'register',
};

const registerUser = (email, password) => {
    return axios.post('/v1/api/register', {
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

export default function SimpleDialog(props: SimpleDialogProps) {
    const { onClose, open } = props;
    const [password, setPassword] = useState('');
    const [type, setType] = useState(props.type);
    const [email, setEmail] = useState('');
    const [isShowErrorTip, setShowErrorTip] = useState(false);

    const handleClose = () => {
        setShowErrorTip(false);
    };

    return (
        <Dialog key={props.key} onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
            <Wrap>
                <Link href="/">
                    <Logo>
                        <img src={require('../../assets/logo.svg')} alt="盘古社区"></img>
                        <div>盘古社区</div>
                        {onClose ? (
                            <CloseButton aria-label="close" onClick={onClose}>
                                <CloseIcon />
                            </CloseButton>
                        ) : null}
                    </Logo>
                </Link>
                <Form>
                    <Typography variant="h6">{type === LOGIN_TYPE.login ? '登录' : '注册'}</Typography>
                    {isShowErrorTip && (
                        <IconSnackbarContent variant="error" message={''} onClose={handleClose}></IconSnackbarContent>
                    )}
                    <div>
                        <CustomInput
                            labelText="请输入手机号或邮箱"
                            id="email"
                            formControlProps={{
                                fullWidth: true,
                            }}
                            inputProps={{
                                type: 'email',
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Email />
                                    </InputAdornment>
                                ),
                                autoComplete: 'off',
                                onChange: event => {
                                    setEmail(event.target.value);
                                },
                            }}
                        />
                        <CustomInput
                            labelText="请输入密码"
                            id="pass"
                            formControlProps={{
                                fullWidth: true,
                            }}
                            inputProps={{
                                type: 'password',
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <LockOutlined />
                                    </InputAdornment>
                                ),
                                autoComplete: 'off',
                                onChange: event => {
                                    setPassword(event.target.value);
                                },
                            }}
                        />
                    </div>
                    <Footer>
                        {type === LOGIN_TYPE.login ? (
                            <Button variant="contained" size="medium" color="primary" fullWidth onClick={() => {}}>
                                登录
                            </Button>
                        ) : (
                            <Button variant="contained" size="medium" color="primary" fullWidth onClick={() => {}}>
                                注册
                            </Button>
                        )}
                    </Footer>
                    {type === LOGIN_TYPE.login ? (
                        <PromptBox>
                            没有账号？
                            <a className="clickable" onClick={() => setType(LOGIN_TYPE.register)}>
                                注册
                            </a>
                        </PromptBox>
                    ) : (
                        <PromptBox>
                            <a className="clickable" onClick={() => setType(LOGIN_TYPE.login)}>
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
            </Wrap>
        </Dialog>
    );
}
