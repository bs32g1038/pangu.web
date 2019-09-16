import React from 'react';
import styles from './style.module.scss';

export default () => {
    return (
        <div className={styles.personInfo}>
            <div className={styles.header}>
                <span className="col_fade">个人信息</span>
            </div>
            <div className={styles.inner}>
                <div className="user_card">
                    <div>
                        <a className="user_avatar" href="/user/bs32g1038">
                            <img
                                src="https://avatars1.githubusercontent.com/u/16550983?v=4&amp;s=120"
                                title="bs32g1038"
                            />
                        </a>
                        <span className="user_name">
                            <a className="dark" href="/user/bs32g1038">
                                bs32g1038
                            </a>
                        </span>

                        <div className={styles.board}>
                            <div className="floor">
                                <span className="big">积分: 75 </span>
                            </div>
                        </div>
                        <div className="space clearfix"></div>
                        <span className={styles.signature}>“ 这家伙很懒，什么个性签名都没有留下。 ”</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
