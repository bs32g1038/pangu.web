import React from 'react';
import styles from './style.module.scss';

export default () => {
    return (
        <div className={styles.wrap}>
            <ul className={styles.menu}>
                <h3 className={styles.title}>节点导航</h3>
                <li className={styles.menuItem}>
                    <a href="#" className={styles.menuItemA}>
                        <img src="/static/media/logo.7e71ed4c.svg" alt="盘古社区" class="style_headerLogo__2ml4v"></img>
                        {/* <span>Java</span> */}
                    </a>
                </li>
                <li className={styles.menuItem}>
                    <a href="#" className={styles.menuItemA}>
                        <img
                            class="menu_bar__MenuItemIcon-sc-1axus5i-5 fbUnOg styles__Logo-sc-7j3cjo-0 kNvlUL"
                            src="https://cps-oss.oss-cn-shanghai.aliyuncs.com/icons/pl/java.png"
                            alt="image"
                        />
                        {/* <span>Java</span> */}
                    </a>
                </li>

                <li className={styles.menuItem}>
                    <a href="#" className={styles.menuItemA}>
                        <img
                            class="digest_view__CommunityLogo-mbf7qv-8 feNaQd styles__Logo-sc-7j3cjo-0 kNvlUL"
                            src="https://cps-oss.oss-cn-shanghai.aliyuncs.com/icons/pl/javascript.png"
                            alt="image"
                        />
                        {/* <span>自然语言处理</span> */}
                    </a>
                </li>
                <li className={styles.menuItem}>
                    <a href="#" className={styles.menuItemA}>
                        <img
                            class="digest_view__CommunityLogo-mbf7qv-8 feNaQd styles__Logo-sc-7j3cjo-0 kNvlUL"
                            src="https://cps-oss.oss-cn-shanghai.aliyuncs.com/icons/pl/go.png"
                            alt="image"
                        />
                        {/* <span>自然语言处理</span> */}
                    </a>
                </li>
            </ul>
        </div>
    );
};
