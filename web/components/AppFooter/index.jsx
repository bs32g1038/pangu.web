import React from 'react';
import styles from './style.module.scss';

export default () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footerMain}>
                <div className="links">
                    <a className="dark" href="/rss">
                        RSS
                    </a>
                    |
                    <a className="dark" href="https://github.com/cnodejs/nodeclub/">
                        源码地址
                    </a>
                </div>

                <div className="col_fade">
                    <p>CNode 社区为国内最专业的 Node.js 开源技术社区，致力于 Node.js 的技术研究。</p>
                    <p>
                        新手搭建 Node.js 服务器，推荐使用无需备案的{' '}
                        <a href="https://www.digitalocean.com/?refcode=eba02656eeb3">
                            DigitalOcean(https://www.digitalocean.com/)
                        </a>
                    </p>
                </div>

                <div>
                    关于 招聘 商务合作 友情链接 ©2019 掘金 Powered by QingCloud 津ICP备15003202号-2
                    京公网安备11010802026719号
                </div>
            </div>
        </div>
    );
};
