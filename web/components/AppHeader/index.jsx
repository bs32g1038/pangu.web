import React, { useState } from 'react';
import styles from './style.module.scss';
import Button from '@material-ui/core/Button';
import LoginPage, { TYPE } from '../LoginPage';

export default () => {
    const [dialog, setDialog] = useState({
        type: TYPE.login,
        isShow: false,
    });
    return (
        <div id="drawer" className="App-drawer">
            <header className={styles.appHeader}>
                <div className={styles.container}>
                    <h1 className={styles.HeaderTitle}>
                        <a href="/" className={styles.HeaderTitleLink}>
                            <img src={require('./logo.svg')} alt="盘古社区" className={styles.headerLogo} />
                            <span className="site-name">盘古社区</span>
                        </a>
                    </h1>
                    <div className={styles.headerPrimary}>
                        <ul className={styles.headerControls}>
                            <li className="item-link1">
                                {/* <a className={styles.button} target="" href="https://flarum.org/" title="Home">
                                    主页
                                </a> */}
                                <Button size="small" component="span" title="Sign Up" className={styles.button}>
                                    主页
                                </Button>
                            </li>
                            <li className="item-link7">
                                {/* <a
                                    className={styles.button}
                                    target="_blank"
                                    href="https://flarum.org/docs/"
                                    title="Docs"
                                >
                                    文档
                                </a> */}
                                <Button size="small" component="span" title="Sign Up" className={styles.button}>
                                    文档
                                </Button>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.headerSecondary}>
                        <ul className={styles.headerControls}>
                            <li className="item-search">
                                <div className={styles.search}>
                                    <div className={styles.searchInput}>
                                        <input
                                            className={styles.formControl}
                                            type="search"
                                            placeholder="Search Forum"
                                        />
                                    </div>
                                    <ul className="Dropdown-menu Search-results"></ul>
                                </div>
                            </li>
                            <li className="item-signUp">
                                <Button
                                    size="small"
                                    component="span"
                                    title="Sign Up"
                                    className={styles.button}
                                    onClick={() =>
                                        setDialog({
                                            type: TYPE.register,
                                            isShow: true,
                                        })
                                    }
                                >
                                    注册
                                </Button>
                            </li>
                            <li className="item-logIn" style={{ marginRight: '20px' }}>
                                <Button
                                    size="small"
                                    component="span"
                                    title="Log In"
                                    className={styles.button}
                                    onClick={() =>
                                        setDialog({
                                            type: TYPE.login,
                                            isShow: true,
                                        })
                                    }
                                >
                                    登录
                                </Button>
                            </li>
                            <li className="item-logIn">
                                <Button
                                    size="small"
                                    variant="contained"
                                    color="primary"
                                    title="Log In"
                                    className={styles.button}
                                >
                                    发布新话题
                                </Button>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
            {dialog.isShow && (
                <LoginPage
                    show={dialog.isShow}
                    type={dialog.type}
                    handleClose={() =>
                        setDialog({
                            ...dialog,
                            isShow: false,
                        })
                    }
                ></LoginPage>
            )}
        </div>
    );
};
