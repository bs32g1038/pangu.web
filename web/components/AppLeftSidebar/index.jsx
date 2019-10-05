import React from 'react';
import { Link } from 'react-router-dom';
import styles from './style.module.scss';

export default props => {
    const {
        nodes = {
            rows: [],
            count: 0,
        },
    } = props;
    return (
        <div className={styles.wrap}>
            <ul className={styles.menu}>
                <h3 className={styles.title}>节点导航</h3>
                <li className={styles.menuItem}>
                    <Link to="/" className={styles.menuItemA}>
                        <img src="/static/media/logo.7e71ed4c.svg" alt="盘古社区"></img>
                        <span>盘古社区</span>
                    </Link>
                </li>
                {nodes.rows.map(item => (
                    <li className={styles.menuItem} key={item.id}>
                        <Link to={`/n/${item.id}`} className={styles.menuItemA}>
                            <img src={item.icon} alt={item.name} />
                            <span>{item.name}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};
