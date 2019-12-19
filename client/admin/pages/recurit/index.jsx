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
import AppHeader from '../../components/AppHeader';
import AppFooter from '../../../components/AppFooter';

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
            setUsers(res.data.data);
        });
    }, [1]);

    return (
        <React.Fragment>
            <AppHeader></AppHeader>
            <Paper className={styles.wrap}>
                <div className={styles.titleWrap}>
                    <Typography variant="h6" className={styles.title}>
                        招聘信息列表
                    </Typography>
                </div>
                <Table className={styles.table} size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell>内容</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.rows.map(row => (
                            <TableRow key={row.id}>
                                <TableCell>
                                    <h2>非 996，硅谷独角兽 Flexport，寻找有工匠精神的同道中人</h2>
                                    <Table className={styles.table} size="small">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>用户</TableCell>
                                                <TableCell>地点</TableCell>
                                                <TableCell>学历</TableCell>
                                                <TableCell>经验</TableCell>
                                                <TableCell>岗位</TableCell>
                                                <TableCell>公司人员数</TableCell>
                                                <TableCell>融资情况</TableCell>
                                                <TableCell>操作</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            <TableRow>
                                                <TableCell>冷夜流星</TableCell>
                                                <TableCell>上海浦东新区金科路</TableCell>
                                                <TableCell>本科</TableCell>
                                                <TableCell>3-5年</TableCell>
                                                <TableCell>前端开发工程师</TableCell>
                                                <TableCell>100-500</TableCell>
                                                <TableCell>不需融资</TableCell>
                                                <TableCell>
                                                    {/* <IconButton
                                            aria-label="edit"
                                            title="编辑"
                                            component={Link}
                                            to={`/write?topicId=${item.id}`}
                                        >
                                            <EditIcon />
                                        </IconButton> */}
                                                    <IconButton aria-label="delete" title="删除">
                                                        <DeleteIcon />
                                                    </IconButton>
                                                </TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
            <AppFooter></AppFooter>
        </React.Fragment>
    );
}
