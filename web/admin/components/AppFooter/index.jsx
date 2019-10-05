import React from 'react';
import styles from './style.module.scss';

export default props => {
    return (
        <div className={styles.footer} style={props.footerStyle || {}}>
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
