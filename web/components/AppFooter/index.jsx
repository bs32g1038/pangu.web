import React from 'react';
import styles from './style.module.scss';

export default () => {
    return (
        <div className={styles.footer}>
            {/* <div className={styles.linkList}>
                <div className={styles.linkListHeader}>友情社区</div>
                <ul className={styles.listGroup}>
                    <li className="list-group-item">
                        <a href="http://cnodejs.org" rel="nofollow" title="CNode 社区" target="_blank">
                            <img src="//l.ruby-china.com/photo/2016/d427ef3efd33b57721df152c2aa1735e.png" />
                        </a>
                    </li>
                    <li className="list-group-item">
                        <a href="https://laravel-china.org" target="_blank" rel="nofollow">
                            <img src="//l.ruby-china.com/photo/2016/d7782871f3fac7e85a95d20c74046909.png" />
                        </a>
                    </li>
                    <a href="http://segmentfault.com" target="_blank" rel="nofollow">
                        <img src="//l.ruby-china.com/photo/2016/e91d14ee109ed066e215057ab40257b7.png" />
                    </a>
                    <li className="list-group-item">
                        <a href="https://testerhome.com/" target="_blank" rel="nofollow">
                            <img src="//l.ruby-china.com/photo/2016/5cd78b730062ab3c768bcc2592c5c7fa.png" />
                        </a>
                    </li>
                </ul>
            </div> */}
            <div className={styles.footerMain}>
                <div className="col_fade">
                    <p>盘古社区是一个论坛开源技术社区，致力于 论坛技术研究。</p>
                    <p>
                        新手搭建 盘古论坛 服务器，推荐使用无需备案的{' '}
                        <a href="https://www.digitalocean.com/?refcode=eba02656eeb3">
                            DigitalOcean(https://www.digitalocean.com/)
                        </a>
                    </p>
                </div>
                <div>©2019 掘金 Powered by QingCloud 津ICP备15003202号-2 京公网安备11010802026719号</div>
            </div>
        </div>
    );
};
