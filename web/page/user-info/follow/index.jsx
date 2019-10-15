import styles from './style.module.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';

export default props => {
    let { activeUserList = [], rows = [] } = props;
    activeUserList = rows.map(item => item.followUser);
    return (
        <div className={styles.wrap}>
            <div className={styles.authorRanking}>
                <div className="inner">
                    <List className={styles.root}>
                        <ListItem>
                            {activeUserList.map(item => (
                                <ListItemAvatar key={item.id} className={styles.userItem}>
                                    <React.Fragment>
                                        <Link className={styles.userItemHeader} to={`/user/${item.account}`}>
                                            <Avatar alt={item.username} src={item.avatar} className={styles.avatar} />
                                            <div style={{ fontSize: '14px', marginLeft: '10px' }}>
                                                <h3
                                                    style={{
                                                        margin: '0',
                                                        fontSize: '14px',
                                                    }}
                                                >
                                                    {item.username}
                                                </h3>
                                                <p
                                                    style={{
                                                        marginTop: '5px',
                                                        fontSize: '13px',
                                                    }}
                                                >
                                                    共 {item.replyCount} 篇文章
                                                </p>
                                            </div>
                                        </Link>
                                        <div className={styles.userItemBottom}>
                                            <Button variant="outlined" size="small" color="primary">
                                                关注
                                            </Button>
                                            <span style={{ marginLeft: 6 }}>积分：{item.score}</span>
                                        </div>
                                    </React.Fragment>
                                </ListItemAvatar>
                            ))}
                        </ListItem>
                    </List>
                </div>
            </div>
        </div>
    );
};
