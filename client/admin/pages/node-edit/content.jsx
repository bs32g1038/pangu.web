import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import queryString from 'query-string';

import { TextField, FormControl, Breadcrumbs, Paper, Typography, Button, FormLabel } from '@material-ui/core';
import { withSnackbar } from 'notistack';

import styles from './style.module.scss';

import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
registerPlugin(FilePondPluginFileValidateType);

import { fetchNodeById, createNode, updateNode } from '../../../api/node';

const Content = props => {
    const [isSuccessMessageShow, setSuccessMessageShow] = useState(false);
    const [files, setFiles] = useState([]);
    const [values, setValues] = useState({
        name: '',
        detail: '',
        icon: '',
        isShowIcon: false,
    });

    useEffect(() => {
        const id = props.match.params.id;
        if (id) {
            fetchNodeById(id).then(res => {
                const node = res.data;
                setValues(node);
            });
        }
    }, [1]);

    function handleChange(event) {
        event.persist();
        setValues(oldValues => ({
            ...oldValues,
            [event.target.name]: event.target.value,
        }));
    }

    return (
        <div className={styles.wrap}>
            <Paper elevation={0} className={styles.paper}>
                <Breadcrumbs aria-label="breadcrumb" className={styles.breadcrumb}>
                    <Link color="inherit" to="/">
                        后台管理
                    </Link>
                    <Typography color="textPrimary">添加节点</Typography>
                </Breadcrumbs>
                <Button
                    variant="contained"
                    size="small"
                    color="primary"
                    onClick={() => {
                        const data = { ...values };
                        const p = values.id ? updateNode(data) : createNode(data);
                        p.then(() => {
                            props.history.goBack();
                        });
                    }}
                >
                    提交
                </Button>
            </Paper>
            <form
                autoComplete="off"
                style={{
                    width: '100%',
                    flex: '1 0 auto',
                }}
            >
                <TextField
                    value={values.name}
                    name="name"
                    label="节点名称"
                    placeholder="请输入名称"
                    onChange={handleChange}
                    margin="normal"
                    variant="outlined"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <FormControl variant="outlined" className={styles.formControl} margin="normal">
                    <FormLabel htmlFor="my-input">节点 Icon</FormLabel>
                    <div className={styles.nodeIconWrap}>
                        {values.icon && <img src={values.icon} />}
                    </div>
                    <FilePond
                        name="file"
                        type="file"
                        files={files}
                        allowMultiple={false}
                        server={{
                            url: 'http://127.0.0.1:7001/v1/api/upload',
                            process: {
                                onload: response => {
                                    const data = JSON.parse(response);
                                    if (data && data.data) {
                                        setValues(oldValues => {
                                            return {
                                                ...oldValues,
                                                icon: data.data.url,
                                            };
                                        });
                                    }
                                },
                            },
                        }}
                        acceptedFileTypes={['image/png', 'image/jpeg']}
                        labelIdle="拖拽/点击上传"
                        onupdatefiles={fileItems => {
                            console.log(fileItems);
                            setFiles(fileItems.map(fileItem => fileItem.file));
                        }}
                    />
                </FormControl>
                <TextField
                    value={values.detail}
                    name="detail"
                    label="节点详情"
                    placeholder="请输入标题（最多 50 个字）"
                    fullWidth
                    onChange={handleChange}
                    margin="normal"
                    variant="outlined"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </form>
        </div>
    );
};

export default withRouter(withSnackbar(Content));
