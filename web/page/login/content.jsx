import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import InputAdornment from '@material-ui/core/InputAdornment';
import Email from '@material-ui/icons/Email';
import LockOutlined from '@material-ui/icons/Lock';
import CustomInput from '../../components/CustomInput';
import Card from '../../components/Card/Card';
import CardBody from '../../components/Card/CardBody';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import styles from './style.module.scss';
import Typography from '@material-ui/core/Typography';
import axios from '../../utils/axios';
import * as oauth from '../../utils/oauth';
import Snackbar from '@material-ui/core/Snackbar';
import IconSnackbarContent from '../../components/IconSnackbarContent';

export const TYPE = {
    login: 'login',
    register: 'register',
};

const registerUser = (email, password) => {
    return axios.post('/v1/api/register', {
        email,
        password,
    });
};

const userLogin = (email, password) => {
    return axios.post('/v1/api/login', {
        email,
        password,
    });
};

function LoginPage(props) {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [responseInfo, setResponseInfo] = useState({
        isShowError: false,
        message: '',
    });

    const handleClose = () => {
        setResponseInfo(oldValue => {
            return {
                ...oldValue,
                isShowError: false,
            };
        });
    };

    const { pathname } = props.location;

    let type = TYPE.login;
    if (pathname.includes('register')) {
        type = TYPE.register;
    }

    return (
        <Card className={styles.card}>
            <Link className={styles.logo} to="/">
                <img src="/static/media/logo.7e71ed4c.svg" alt="盘古社区"></img>
                盘古社区
            </Link>
            <form className={styles.form}>
                {responseInfo.isShowError && (
                    <IconSnackbarContent
                        variant="error"
                        className={styles.errorInfoMargin}
                        message={responseInfo.message}
                        onClose={handleClose}
                    ></IconSnackbarContent>
                )}
                <Typography variant="h6">{type === TYPE.login ? '登录' : '注册'}</Typography>
                <CardBody>
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
                </CardBody>
                <div className={styles.footer}>
                    {type === TYPE.login ? (
                        <Button
                            variant="contained"
                            size="medium"
                            color="primary"
                            fullWidth
                            onClick={() => {
                                userLogin(email, password).then(res => {
                                    if (res.data.code !== 200) {
                                        return setResponseInfo({
                                            isShowError: true,
                                            message: res.data.message,
                                        });
                                    }
                                    oauth.setLoginInfo(res.data.data);
                                    props.history.push('/');
                                });
                            }}
                        >
                            登录
                        </Button>
                    ) : (
                        <Button
                            variant="contained"
                            size="medium"
                            color="primary"
                            fullWidth
                            onClick={() => {
                                registerUser(email, password).then(res => {
                                    console.log(res.data)
                                    if (res.data.code !== 200) {
                                        return setResponseInfo({
                                            isShowError: true,
                                            message: res.data.message,
                                        });
                                    }
                                    props.history.push('/');
                                });
                            }}
                        >
                            注册
                        </Button>
                    )}
                </div>
                {type === TYPE.login ? (
                    <div className={styles.promptBox}>
                        没有账号？
                        <Link className={styles.clickable} to="/register">
                            注册
                        </Link>
                        {/* <a href="/reset-password" className={styles.clickable} style={{ float: 'right' }}>
                            忘记密码
                        </a> */}
                    </div>
                ) : (
                    <div className={styles.promptBox} style={{ textAlign: 'center' }}>
                        <Link className={styles.clickable} to="/login">
                            已有账号登录
                        </Link>
                    </div>
                )}
                <div className={styles.oauthBox}>
                    <div className="hint">第三方账号登录：</div>
                    <div className={styles.oauth}>
                        <div className={styles.oauthBg}>
                            <IconButton variant="contained" size="medium" color="primary" aria-label="Add">
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
                        </div>
                    </div>
                </div>
                <div className={styles.agreementBox}>
                    注册登录即表示同意
                    <a href="/terms" target="_blank">
                        用户协议
                    </a>
                    、
                    <a href="/privacy" target="_blank">
                        隐私政策
                    </a>
                </div>
            </form>
        </Card>
    );
}

export default withRouter(LoginPage);
