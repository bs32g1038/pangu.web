import React, { useState, useEffect } from 'react';
import styles from './style.module.scss';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import Switch from '@material-ui/core/Switch';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { TOPIC_TYPE } from '../../../configs/constant';
import { Link } from 'react-router-dom';
import { timeAgo, parseTime } from '../../../utils/time';
import { fetchUserList } from '../../../api/user';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing(3),
        overflowX: 'auto',
    },
    table: {
        minWidth: 650,
    },
}));

export default function UserTable() {
    const classes = useStyles();
    const [users, setUsers] = useState({
        rows: [],
        count: 0,
    });

    useEffect(() => {
        fetchUserList().then(res => {
            setUsers(res.data);
        });
    }, [1]);

    return (
        <Paper className={styles.wrap}>
            <div className={styles.titleWrap}>
                <Typography variant="h6" className={styles.title}>
                    根节点列表
                </Typography>
            </div>
            <Table className={styles.table} size="small">
                <TableHead>
                    <TableRow>
                        <TableCell align="left">头像</TableCell>
                        <TableCell>基础信息</TableCell>
                        <TableCell align="left">数据</TableCell>
                        <TableCell align="right">是否vip</TableCell>
                        <TableCell align="right">是否激活</TableCell>
                        <TableCell align="right">是否禁用</TableCell>
                        <TableCell>操作</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.rows.map(row => (
                        <TableRow key={row.id}>
                            <TableCell align="left">
                                <img src={row.avatar} alt={row.username} width="24" />
                            </TableCell>
                            <TableCell>
                                <p>昵称：{row.username}</p>
                                <p>账号：{row.account}</p>
                                <p>邮箱：{row.email}</p>
                                <p>创建时间：{timeAgo(row.createdAt)}</p>
                                <p>位置：{row.location}</p>
                            </TableCell>
                            <TableCell align="left">
                                <p>积分：{row.score}</p>
                                <p>关注者：{row.followerCount}</p>
                                <p>关注他人：{row.followingCount}</p>
                                <p>话题数：{row.topicCount}</p>
                                <p>收藏帖子数：{row.collectTopicCount}</p>
                            </TableCell>
                            <TableCell align="right">
                                <Switch checked={row.vip} color="primary" />
                            </TableCell>
                            <TableCell align="right">
                                <Switch checked={row.active} color="primary" />
                            </TableCell>
                            <TableCell align="right">
                                <Switch checked={row.enable} color="primary" />
                            </TableCell>
                            <TableCell>
                                <IconButton aria-label="delete" title="删除">
                                    <DeleteIcon />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    );
}
