import React from 'react';
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

function createData(icon, name, calories, fat, isShowIcon, protein) {
    return { icon, name, calories, fat, isShowIcon, protein };
}

const rows = [
    createData('', 'Java', 'the only language that works on every device on earth', 6.0, true, 4.0),
    createData('', 'Nodejs', 'cpp is awesome!', 9.0, true, 4.3),
];

export default function SimpleTable() {
    const classes = useStyles();

    return (
        <Paper className={styles.wrap}>
            <div className={styles.titleWrap}>
                <Typography variant="h6" className={styles.title}>
                    根节点列表
                </Typography>
                <Button size="small" variant="contained" color="primary" className={styles.buttonAdd}>
                    添加节点
                </Button>
            </div>
            <Table className={styles.table} size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Icon</TableCell>
                        <TableCell>名称</TableCell>
                        <TableCell align="left">详情</TableCell>
                        <TableCell align="left">话题数量</TableCell>
                        <TableCell align="right">是否显示Icon</TableCell>
                        <TableCell>操作</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map(row => (
                        <TableRow key={row.name}>
                            <TableCell>
                                <AssignmentIndIcon></AssignmentIndIcon>
                            </TableCell>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="left">{row.calories}</TableCell>
                            <TableCell align="left">{row.fat}</TableCell>
                            <TableCell align="right">
                                <Switch checked={row.isShowIcon} value="checkedB" color="primary" />
                            </TableCell>
                            <TableCell>
                                <IconButton aria-label="edit" title="编辑">
                                    <EditIcon />
                                </IconButton>
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
