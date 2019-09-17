import React from 'react';
import styles from './style.module.scss';

export default () => {
    return (
        <div className={styles.rightPanel}>
            {/* <SiderPersonInfo></SiderPersonInfo> */}
            {/* <div className={styles.authorRanking}>
                <div className={styles.authorRankingHeader}>
                    <span className="col_fade">名人榜</span>
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
                            <ListItemText
                                className={styles.listItemText}
                                primary="冷夜流星"
                                secondary="明星会员 9800贡献"
                            />
                            <ListItemSecondaryAction>
                                <Button size="small" className={styles.followButton}>
                                    <AddIcon fontSize="small"></AddIcon>关注
                                </Button>
                            </ListItemSecondaryAction>
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar
                                    alt="Remy Sharp"
                                    src="https://avatars1.githubusercontent.com/u/16550983?v=4&amp;s=120"
                                    className={styles.avatar}
                                />
                            </ListItemAvatar>
                            <ListItemText
                                className={styles.listItemText}
                                primary="冷夜流星"
                                secondary="明星会员 9800贡献"
                            />
                            <ListItemSecondaryAction>
                                <Button size="small" className={styles.followButton}>
                                    <AddIcon fontSize="small"></AddIcon>关注
                                </Button>
                            </ListItemSecondaryAction>
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar
                                    alt="Remy Sharp"
                                    src="https://avatars1.githubusercontent.com/u/16550983?v=4&amp;s=120"
                                    className={styles.avatar}
                                />
                            </ListItemAvatar>
                            <ListItemText
                                className={styles.listItemText}
                                primary="冷夜流星"
                                secondary="明星会员 9800贡献"
                            />
                            <ListItemSecondaryAction>
                                <Button size="small" className={styles.followButton}>
                                    <AddIcon fontSize="small"></AddIcon>关注
                                </Button>
                            </ListItemSecondaryAction>
                        </ListItem>
                        <Divider variant="inset" component="li" />
                    </List>
                </div>
            </div> */}
            <div className={styles.linkList}>
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
            </div>
        </div>
    );
};
