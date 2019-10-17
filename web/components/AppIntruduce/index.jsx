import React from 'react';
import styles from './style.module.scss';

export default () => {
    return (
        <div className={styles.wrap}>
            <div className={styles.left}>
                <h3>盘古论坛</h3>
                <p>最专业的，漂亮的轻论坛技术社区</p>
            </div>
            {/* <div>
                <span className={styles.label}>主题总数：</span> <span className={styles.count}>54</span>
            </div> */}
        </div>
    );
};
