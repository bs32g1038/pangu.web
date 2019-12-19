import { TextField, MenuItem, Breadcrumbs, Typography, Button, FormControlLabel, Checkbox } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Router, { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import * as oauth from '@pangu/client/web/utils/oauth';
import { fetchNodes } from '@pangu/client/web/api/node';
import { fetchTopicById, createTopic, updateTopic } from '@pangu/client/web/api/topic';
import Layout from '@pangu/client/admin/components/Layout/Layout';
import {
    Home as HomeIcon,
    FilterNone as UIElementsIcon,
    QuestionAnswer as SupportIcon,
    HelpOutline as FAQIcon,
    ArrowBack as ArrowBackIcon,
    Description as DescriptionIcon,
    SupervisedUserCircle as SupervisedUserCircleIcon,
    CommentSharp as CommentSharpIcon,
    Settings as SettingsIcon,
} from '@material-ui/icons';

const Editor = dynamic(() => import('@pangu/client/libs/Editor'), { ssr: false });
import Recruit from './recruit';

import { Wrap, Paper, FormControl, CheckboxFormControl } from './style';

const Page = props => {
    const user = oauth.getLoginInfo();
    const [nodes, setNodes] = useState([]);
    const [editor, setEditor] = useState(null);
    const [values, setValues] = useState({
        id: null,
        title: '',
        node: '',
        type: -1,
        content: '',
        good: false,
        top: false,
        userId: user.id,
        recruitInfo: null,
    });
    const router = useRouter();
    useEffect(() => {
        fetchNodes().then(res => {
            setNodes(res.data.data);
        });
        const topicId = router.query.topicId;
        if (topicId) {
            fetchTopicById(topicId).then(res => {
                const topic = res.data.data;
                setValues(value => ({
                    ...value,
                    id: topicId,
                    title: topic.title,
                    node: topic.nodeId,
                    type: topic.type,
                    content: topic.content,
                    good: topic.good,
                    top: topic.top,
                    recruitInfo: topic.recruitInfo,
                }));
                editor.setValue(topic.content);
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
        <Layout>
            <Wrap>
                <Paper elevation={0}>
                    <Breadcrumbs aria-label="breadcrumb" className="breadcrumb">
                        <Link href="/admin/articles">
                            <a color="inherit" style={{ display: 'flex', alignItems: 'center' }}>
                                <DescriptionIcon fontSize="small"></DescriptionIcon>文章管理
                            </a>
                        </Link>
                        <Typography color="textPrimary">编辑话题</Typography>
                    </Breadcrumbs>
                    <Button
                        variant="contained"
                        size="small"
                        color="primary"
                        onClick={() => {
                            console.log(values);
                            const data = { ...values, content: editor.getValue() };
                            const p = values.id ? updateTopic(data) : createTopic(data);
                            p.then(() => {
                                Router.push('/');
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
                        value={values.title}
                        name="title"
                        label="话题标题"
                        placeholder="请输入标题（最多 50 个字）"
                        fullWidth
                        onChange={handleChange}
                        margin="normal"
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <FormControl>
                        <TextField
                            id="standard-select-currency"
                            className="select"
                            select
                            label="请选择话题根节点"
                            name="node"
                            value={values.node}
                            onChange={handleChange}
                            helperText="话题所在的根节点"
                            margin="normal"
                            variant="outlined"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        >
                            {nodes.map(option => (
                                <MenuItem key={option.id} value={option.id}>
                                    {option.name}
                                </MenuItem>
                            ))}
                        </TextField>
                        {values.node && (
                            <TextField
                                id="standard-select-currency"
                                className="select"
                                select
                                label="请选择子节点"
                                name="type"
                                value={values.type}
                                onChange={handleChange}
                                helperText="话题子节点"
                                margin="normal"
                                variant="outlined"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            >
                                <MenuItem value={1}>分享</MenuItem>
                                <MenuItem value={2}>问答</MenuItem>
                                <MenuItem value={3}>招聘</MenuItem>
                            </TextField>
                        )}
                    </FormControl>
                    <CheckboxFormControl>
                        <FormControlLabel
                            className="checkbox"
                            control={
                                <Checkbox
                                    checked={values.good}
                                    onChange={event => {
                                        setValues(oldValues => ({
                                            ...oldValues,
                                            good: event.target.checked,
                                        }));
                                    }}
                                    value="good"
                                    color="primary"
                                />
                            }
                            label="精华"
                        />
                        <FormControlLabel
                            className="checkbox"
                            control={
                                <Checkbox
                                    value="top"
                                    checked={values.top}
                                    onChange={event => {
                                        setValues(oldValues => ({
                                            ...oldValues,
                                            top: event.target.checked,
                                        }));
                                    }}
                                    color="primary"
                                />
                            }
                            label="置顶"
                        />
                    </CheckboxFormControl>
                    {values.type === 3 && (
                        <Recruit
                            recruitInfo={values.recruitInfo}
                            onChange={recruitInfo => {
                                setValues({ ...values, recruitInfo });
                            }}
                        ></Recruit>
                    )}
                    <FormControl variant="outlined">
                        <Editor
                            content={values.content}
                            getEditor={editor => {
                                setEditor(editor);
                            }}
                        ></Editor>
                    </FormControl>
                </form>
            </Wrap>
        </Layout>
    );
};

export default Page;
