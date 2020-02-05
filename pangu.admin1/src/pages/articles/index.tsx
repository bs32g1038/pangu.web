import React, { useState, useEffect } from 'react';
import MUIDataTable from 'mui-datatables';
import Switch from '@material-ui/core/Switch';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { Link } from 'react-router-dom';
import { WrapTable } from './styles';
import Chip from '@material-ui/core/Chip';

import { fetchTopics } from '../../api/topic';
import { parseTime } from '../../libs/time';
import { Avatar } from '@material-ui/core';

const columns = [
    {
        name: 'id',
        label: '操作',
        options: {
            filter: false,
            sort: false,
            customBodyRender: value => (
                <>
                    <Link to={`/admin/article/edit/${value}`}>
                        <IconButton aria-label="edit" title="编辑" color="primary">
                            <EditIcon />
                        </IconButton>
                    </Link>
                    <IconButton aria-label="delete" title="删除" color="secondary">
                        <DeleteIcon />
                    </IconButton>
                </>
            ),
        },
    },
    {
        name: 'title',
        label: '标题',
    },
    {
        name: 'node',
        label: '所在节点',
        options: {
            filter: false,
            sort: false,
            customBodyRender: value => {
                return <Chip size="small" label={value.name} color="primary" />;
            },
        },
    },
    {
        name: 'user',
        label: '作者',
        options: {
            filter: false,
            sort: false,
            customBodyRender: value => {
                return <Chip size="small" avatar={<Avatar alt="Natacha" src={value.avatar} />} label={value.account} />;
            },
        },
    },
    {
        name: 'createdAt',
        label: '创建时间',
        options: {
            filter: true,
            sort: false,
            customBodyRender: value => parseTime(value),
        },
    },
    {
        name: 'good',
        label: '精华',
        options: {
            filter: true,
            sort: false,
            customBodyRender: value => (
                <Switch checked={value} value="是否精华" inputProps={{ 'aria-label': 'secondary checkbox' }} />
            ),
        },
    },
    {
        name: 'top',
        label: '置顶',
        options: {
            filter: true,
            sort: false,
            customBodyRender: value => (
                <Switch checked={value} value="是否置顶" inputProps={{ 'aria-label': 'secondary checkbox' }} />
            ),
        },
    },
    {
        name: 'visitCount',
        label: '浏览量',
    },
    {
        name: 'replyCount',
        label: '评论数',
    },
    {
        name: 'locked',
        label: '锁定主题',
        options: {
            filter: true,
            sort: false,
            customBodyRender: value => (
                <Switch checked={value} value="主题是否被锁定" inputProps={{ 'aria-label': 'secondary checkbox' }} />
            ),
        },
    },
];

export default props => {
    const [state, setState] = useState({
        tableData: [],
        dataCount: 0,
    });

    useEffect(() => {
        fetchTopics().then(res => {
            setState(val => ({
                ...val,
                tableData: res.data.data.rows,
                dataCount: res.data.data.count,
            }));
        });
    }, [1]);

    return (
        <>
            <WrapTable>
                <MUIDataTable
                    title="文章列表"
                    data={state.tableData}
                    columns={columns}
                    options={{
                        filterType: 'checkbox',
                        count: state.dataCount,
                        rowsPerPageOptions: [10],
                        onChangePage: curPage => {
                            fetchTopics(curPage).then(res => {
                                setState(val => ({
                                    ...val,
                                    tableData: res.data.data.rows,
                                    dataCount: res.data.data.count,
                                }));
                            });
                        },
                    }}
                />
            </WrapTable>
        </>
    );
};
