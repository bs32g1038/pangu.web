import React from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import Email from '@material-ui/icons/Email';
import CloseIcon from '@material-ui/icons/Close';
import LockOutlined from '@material-ui/icons/Lock';
import CustomInput from '../CustomInput';
import Card from '../Card/Card';
import CardBody from '../Card/CardBody';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Dialog from '@material-ui/core/Dialog';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import styles from './style.module.scss';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import Zoom from '@material-ui/core/Zoom';
import axios from '../../utils/axios';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Zoom direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles({});

const Container = styled.div`
    width: 100%;
    position: relative;
    flex-basis: auto;
    min-height: 1px;
    padding-left: 15px;
    padding-right: 15px;
`;

export const TYPE = {
    login: 'login',
    register: 'register',
};

const registerUser = (email, password) => {
    return axios
        .post('/v1/api/register', {
            email,
            password,
        })
        .then(res => {
            if (res.data && res.data.id) {
                return alert('注册成功！');
            }
        });
};

const userLogin = (email, password) => {
    return axios
        .post('/v1/api/login', {
            email,
            password,
        })
        .then(res => {});
};

export default function LoginPage(props) {
    const [password, setPassword] = React.useState('');
    const [email, setEmail] = React.useState('');

    const handleClose = value => {
        if (props.handleClose) {
            props.handleClose();
        }
    };

    const classes = useStyles();
    const { type = 'login' } = props;
    return (
        <Dialog
            TransitionComponent={Transition}
            onClose={handleClose}
            aria-labelledby="simple-dialog-title"
            open={props.show}
        >
            <Card>
                <form className={styles.form}>
                    <MuiDialogTitle disableTypography className={styles.root}>
                        <Typography variant="h6">{type === TYPE.login ? '登录' : '注册'}</Typography>
                        <IconButton aria-label="close" className={styles.closeButton} onClick={handleClose}>
                            <CloseIcon />
                        </IconButton>
                    </MuiDialogTitle>
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
                                        <Email className={classes.inputIconsColor} />
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
                        <Button variant="contained" size="medium" color="primary" aria-label="Add">
                            <svg
                                className="MuiSvgIcon-root"
                                focusable="false"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                                role="presentation"
                            >
                                <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3"></path>
                            </svg>
                            &nbsp;&nbsp;Github登录
                        </Button>
                        {type === TYPE.login ? (
                            <Button
                                variant="contained"
                                size="medium"
                                color="primary"
                                onClick={() => {
                                    userLogin(email, password).then(() => {
                                        handleClose();
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
                                onClick={() => {
                                    registerUser(email, password).then(() => {
                                        handleClose();
                                    });
                                }}
                            >
                                注册
                            </Button>
                        )}
                    </div>
                </form>
            </Card>
        </Dialog>
    );
}
