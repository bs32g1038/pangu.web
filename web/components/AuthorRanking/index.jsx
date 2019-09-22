import styles from './style.module.scss';
import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';

export default props => {
    const { activeUserList = [] } = props;
    return (
        <div className={styles.wrap}>
            <div className={styles.authorRanking}>
                <div className={styles.authorRankingHeader}>
                    <span className="col_fade">活跃用户</span>
                </div>
                <div className="inner">
                    <List className={styles.root}>
                        <ListItem>
                            {activeUserList.map(item => (
                                <ListItemAvatar
                                    style={{
                                        marginRight: '14px',
                                        flex: '1 0 auto',
                                    }}
                                    key={item.id}
                                >
                                    <div>
                                        <div
                                            style={{
                                                display: 'flex',
                                            }}
                                        >
                                            <Avatar
                                                alt="Remy Sharp"
                                                src="https://avatars1.githubusercontent.com/u/16550983?v=4&amp;s=120"
                                                className={styles.avatar}
                                            />
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
                                        </div>
                                        <div
                                            style={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                fontSize: '13px',
                                                alignItems: 'center',
                                            }}
                                        >
                                            <Button
                                                variant="outlined"
                                                size="small"
                                                color="primary"
                                                style={{
                                                    padding: '0 4px',
                                                    minWidth: 'auto',
                                                    fontSize: '12px',
                                                }}
                                            >
                                                关注
                                            </Button>
                                            <span style={{ marginLeft: 6 }}>积分：{item.score}</span>
                                        </div>
                                    </div>
                                </ListItemAvatar>
                            ))}
                        </ListItem>
                    </List>
                </div>
            </div>
        </div>
    );
};
