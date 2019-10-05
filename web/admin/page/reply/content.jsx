import React, { useState, useEffect } from 'react';
import styles from './style.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { Link } from 'react-router-dom';
import { timeAgo } from '../../../utils/time';
import { fetchReplyList } from '../../../api/reply';
import * as markdown from '../../../utils/markdown';

export default function SimpleTable() {
    const [reply, setReply] = useState({
        count: 0,
        rows: [],
    });

    useEffect(() => {
        fetchReplyList().then(res => {
            setReply(res.data);
        });
    }, [1]);

    return (
        <Paper className={styles.wrap}>
            <div className={styles.titleWrap}>
                <Typography variant="h6" className={styles.title}>
                    回复列表
                </Typography>
            </div>
            <Table className={styles.table} size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>话题</TableCell>
                        <TableCell>操作</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {reply.rows.map(row => (
                        <TableRow key={row.id}>
                            <TableCell component="th" scope="row">
                                <div>
                                    <strong>话题标题：</strong>
                                    <Link to={`/topic/${row.topic && row.topic.id}`}>
                                        {row.topic && row.topic.title}
                                    </Link>
                                </div>
                                <p>
                                    <strong>用户名：</strong>
                                    {row.user && row.user.username} &nbsp; &nbsp;
                                    <strong>创建时间：</strong>
                                    {timeAgo(row.createdAt)}
                                </p>
                                <p>
                                    <strong>点赞数：</strong> {row.like}
                                </p>
                                <p>
                                    <strong>回复内容：</strong>
                                </p>
                                <p dangerouslySetInnerHTML={{ __html: markdown.render(row.content) }}></p>
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
