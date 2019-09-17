import styles from './style.module.scss';
import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import AddIcon from '@material-ui/icons/Add';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

export default () => {
    return (
        <div className={styles.wrap}>
            <div className={styles.authorRanking}>
                <div className={styles.authorRankingHeader}>
                    <span className="col_fade">活跃用户</span>
                </div>
                <div className="inner">
                    <List className={styles.root}>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar
                                    alt="Remy Sharp"
                                    src="https://avatars1.githubusercontent.com/u/16550983?v=4&amp;s=120"
                                    className={styles.avatar}
                                />
                            </ListItemAvatar>
                            <ListItemAvatar>
                                <Avatar
                                    alt="Remy Sharp"
                                    src="https://avatars1.githubusercontent.com/u/16550983?v=4&amp;s=120"
                                    className={styles.avatar}
                                />
                            </ListItemAvatar>
                            <ListItemAvatar>
                                <Avatar
                                    alt="Remy Sharp"
                                    src="https://img.hacpai.com/avatar/1534308939842?imageView2/1/w/64/h/64/interlace/0/q/100"
                                    className={styles.avatar}
                                />
                            </ListItemAvatar>
                            <ListItemAvatar>
                                <Avatar
                                    alt="Remy Sharp"
                                    src="https://img.hacpai.com/avatar/1526567516960_1526567665928.?imageView2/1/w/64/h/64/interlace/0/q/100"
                                    className={styles.avatar}
                                />
                            </ListItemAvatar>
                            <ListItemAvatar>
                                <Avatar
                                    alt="Remy Sharp"
                                    src="https://avatars1.githubusercontent.com/u/16550983?v=4&amp;s=120"
                                    className={styles.avatar}
                                />
                            </ListItemAvatar>
                            <ListItemAvatar>
                                <Avatar
                                    alt="Remy Sharp"
                                    src="https://avatars1.githubusercontent.com/u/16550983?v=4&amp;s=120"
                                    className={styles.avatar}
                                />
                            </ListItemAvatar>
                            <ListItemAvatar>
                                <Avatar
                                    alt="Remy Sharp"
                                    src="https://img.hacpai.com/avatar/1534308939842?imageView2/1/w/64/h/64/interlace/0/q/100"
                                    className={styles.avatar}
                                />
                            </ListItemAvatar>
                            <ListItemAvatar>
                                <Avatar
                                    alt="Remy Sharp"
                                    src="https://img.hacpai.com/avatar/1526567516960_1526567665928.?imageView2/1/w/64/h/64/interlace/0/q/100"
                                    className={styles.avatar}
                                />
                            </ListItemAvatar>
                            <ListItemAvatar>
                                <Avatar
                                    alt="Remy Sharp"
                                    src="https://avatars1.githubusercontent.com/u/16550983?v=4&amp;s=120"
                                    className={styles.avatar}
                                />
                            </ListItemAvatar>
                            <ListItemAvatar>
                                <Avatar
                                    alt="Remy Sharp"
                                    src="https://avatars1.githubusercontent.com/u/16550983?v=4&amp;s=120"
                                    className={styles.avatar}
                                />
                            </ListItemAvatar>
                            <ListItemAvatar>
                                <Avatar
                                    alt="Remy Sharp"
                                    src="https://img.hacpai.com/avatar/1534308939842?imageView2/1/w/64/h/64/interlace/0/q/100"
                                    className={styles.avatar}
                                />
                            </ListItemAvatar>
                            <ListItemAvatar>
                                <Avatar
                                    alt="Remy Sharp"
                                    src="https://img.hacpai.com/avatar/1526567516960_1526567665928.?imageView2/1/w/64/h/64/interlace/0/q/100"
                                    className={styles.avatar}
                                />
                            </ListItemAvatar>
                        </ListItem>
                    </List>
                </div>
            </div>
        </div>
    );
};
