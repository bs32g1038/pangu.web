import React, { useState, useEffect } from 'react';
import Layout from '@pangu/client/admin/components/Layout/Layout';
import MUIDataTable from 'mui-datatables';
import Switch from '@material-ui/core/Switch';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Link from 'next/link';
import { WrapTable, Description } from './styles';
import Button from '@material-ui/core/Button';
import { fetchNodes } from '@pangu/client/admin/api/node';
import { parseTime } from '@pangu/client/libs/time';

const columns = [
    {
        name: 'id',
        label: '操作',
        options: {
            filter: false,
            sort: false,
            customBodyRender: value => (
                <>
                    <Link href={`/admin/article/edit?topicId=${value}`} passHref={true}>
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
        name: 'icon',
        label: '节点Icon',
        options: {
            customBodyRender: value => {
                return <img src={value} width="20" />;
            },
        },
    },
    {
        name: 'name',
        label: '节点名称',
    },
    {
        name: 'detail',
        label: '节点描述',
        options: {
            customBodyRender: value => {
                return <Description>{value}111</Description>;
            },
        },
    },
    {
        name: 'isShowIcon',
        label: '是否显示icon',
        options: {
            filter: true,
            sort: false,
            customBodyRender: value => (
                <Switch checked={value} value="是否精华" inputProps={{ 'aria-label': 'secondary checkbox' }} />
            ),
        },
    },
    {
        name: 'topicCount',
        label: '当前节点下的话题数量',
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
];

export default props => {
    const [state, setState] = useState({
        tableData: [],
    });

    useEffect(() => {
        fetchNodes().then(res => {
            setState(val => ({
                ...val,
                tableData: res.data.data,
            }));
        });
    }, [1]);

    return (
        <Layout>
            <>
                <div>
                    <Button size="small" variant="contained" color="primary">
                        添加节点
                    </Button>
                </div>
                <WrapTable>
                    <MUIDataTable
                        title="节点列表"
                        data={state.tableData}
                        columns={columns}
                        options={{
                            filterType: 'checkbox',
                            rowsPerPageOptions: [10],
                            onChangePage: curPage => {
                                fetchNodes(curPage).then(res => {
                                    setState(val => ({
                                        ...val,
                                        tableData: res.data.data,
                                    }));
                                });
                            },
                        }}
                    />
                </WrapTable>
            </>
        </Layout>
    );
};
