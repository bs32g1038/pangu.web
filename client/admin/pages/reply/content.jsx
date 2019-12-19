import React, { useState, useEffect } from 'react';
import styles from './style.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import { Link } from 'react-router-dom';
import { timeAgo } from '../../../utils/time';
import { fetchReplyList } from '../../../api/reply';
import * as markdown from '../../../utils/markdown';
import { Title, Meta, ReplySign, MarkdownBody, ControlPanel } from './style';
import 'vditor/src/assets/scss/classic.scss';

export default function SimpleTable() {
    const [reply, setReply] = useState({
        count: 0,
        rows: [],
    });

    useEffect(() => {
        fetchReplyList().then(res => {
            setReply(res.data.data);
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
                        {/* <TableCell>操作</TableCell> */}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {reply.rows.map(row => (
                        <TableRow key={row.id}>
                            <TableCell component="th" scope="row">
                                <Title>
                                    <strong>话题标题：</strong>
                                    <Link to={`/topic/${row.topic && row.topic.id}`}>
                                        {row.topic && row.topic.title}
                                    </Link>
                                </Title>
                                <Meta>
                                    <span>用户名：</span>
                                    <span className="author">{row.user && row.user.username}</span>
                                    <span>创建时间：</span>
                                    <span className="time">{timeAgo(row.createdAt)}</span>
                                    <span> 点赞数：</span>
                                    <span className="count">{row.like}</span>
                                </Meta>
                                <ReplySign>回复内容：</ReplySign>
                                <MarkdownBody
                                    className="vditor-reset"
                                    dangerouslySetInnerHTML={{ __html: markdown.render(row.content) }}
                                ></MarkdownBody>
                                <ControlPanel>
                                    <Button aria-label="delete" title="删除" variant="outlined" color="secondary">
                                        <DeleteIcon />
                                        删除
                                    </Button>
                                </ControlPanel>
                            </TableCell>
                            {/* <TableCell>
                                <IconButton aria-label="delete" title="删除">
                                    <DeleteIcon />
                                </IconButton>
                            </TableCell> */}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    );
}
