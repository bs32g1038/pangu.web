import {
    Breadcrumbs,
    Typography,
    Button,
    InputLabel,
    ListItemText,
    Chip,
    FormHelperText,
    MenuItem,
    Checkbox,
    Avatar,
} from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import App from '../../layouts/app';
import Link from 'next/link';
import Router, { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import * as oauth from '../../utils/oauth';
import { fetchCategories, fetchTags } from '../../api/node';
import { fetchTopicById, createTopic, updateTopic } from '../../api/topic';
import { Formik, Form } from 'formik';
import { TextField, Select } from 'formik-material-ui';
import { withAuthSync } from '../../utils/auth';
// const Editor = dynamic(() => import('../../libs/Editor'), { ssr: false });

import { Wrap, Paper, FormControl, CheckboxFormControl } from './style';

const Page = props => {
    const router = useRouter();
    const user = oauth.getLoginInfo();
    const [categories, setCategories] = useState([]);
    const [tags, setTags] = useState([]);
    const [selectTags, setSelectTags] = useState([]);
    const [editor, setEditor] = useState(null);
    const [values, setValues] = useState({
        id: null,
        title: '',
        categoryId: '',
        type: -1,
        content: '',
        good: false,
        top: false,
        userId: user && user.id,
        recruitInfo: null,
        tags: [],
    });
    useEffect(() => {
        fetchCategories().then(res => {
            setCategories(res.data.data.rows);
        });
        fetchTags().then(res => {
            setTags(res.data.data.rows);
        });
        console.log(router);
        if (router) {
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
        }
    }, [1]);

    return (
        <App>
            <Formik
                initialValues={values}
                validate={(values: any) => {
                    const errors: any = {};
                    if (!values.title) {
                        errors.title = '请输入标题!';
                    }
                    if (!values.categoryId) {
                        errors.categoryId = '请选择一个分类!';
                    }
                    if (values.tags.length > 3) {
                        console.log('asdsadsad');
                        errors.tags = '最多选择三个标签!';
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    console.log(values);
                    setTimeout(() => {
                        setSubmitting(false);
                        alert(JSON.stringify(values, null, 2));
                    }, 500);
                }}
            >
                {({ errors, submitForm, isSubmitting }) => (
                    <Wrap>
                        <Paper elevation={0}>
                            <Breadcrumbs aria-label="breadcrumb" className="breadcrumb">
                                <Link href="/">
                                    <a color="inherit">主页</a>
                                </Link>
                                <Typography color="textPrimary">发布话题</Typography>
                            </Breadcrumbs>
                            <Button
                                variant="contained"
                                size="small"
                                color="primary"
                                onClick={() => {
                                    submitForm();
                                    // console.log(values);
                                    // const data = { ...values, content: editor.getValue() };
                                    // const p = values.id ? updateTopic(data) : createTopic(data);
                                    // p.then(() => {
                                    //     Router.push('/');
                                    // });
                                }}
                            >
                                提交
                            </Button>
                        </Paper>
                        <Form className="form">
                            <TextField
                                className="title"
                                name="title"
                                label="话题标题"
                                placeholder="请输入标题（最多 50 个字）"
                                fullWidth
                                margin="normal"
                                variant="outlined"
                                required={true}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <TextField
                                className="select"
                                select
                                type="select"
                                label="请选择话题分类"
                                name="categoryId"
                                helperText="话题所在的分类"
                                margin="normal"
                                variant="outlined"
                                required={true}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            >
                                {categories.map(option => (
                                    <MenuItem key={option.id} value={option.id}>
                                        {option.name}
                                    </MenuItem>
                                ))}
                            </TextField>
                            <FormControl className="select-form-control" variant="outlined">
                                <InputLabel className="topic-tag-label" shrink>
                                    话题标签
                                </InputLabel>
                                <Select
                                    id="demo-mutiple-checkbox"
                                    className="select-tags"
                                    name="tags"
                                    required={true}
                                    multiple
                                    renderValue={(selected: any) => {
                                        setSelectTags(selected);
                                        return (
                                            <div>
                                                {selected.map(item => (
                                                    <Chip
                                                        size="small"
                                                        avatar={<Avatar src={item.icon} />}
                                                        key={item.id}
                                                        label={item.name}
                                                    />
                                                ))}
                                            </div>
                                        );
                                    }}
                                >
                                    {tags.map(item => {
                                        console.log(errors);
                                        return (
                                            <MenuItem key={item.id} value={item}>
                                                <Checkbox
                                                    checked={selectTags.some(s => {
                                                        return s.name.includes(item.name);
                                                    })}
                                                />
                                                <ListItemText primary={item.name} />
                                            </MenuItem>
                                        );
                                    })}
                                </Select>
                                <FormHelperText error={errors.tags && true}>
                                    {errors.tags || '最多三个标签'}
                                </FormHelperText>
                            </FormControl>
                        </Form>
                    </Wrap>
                )}
            </Formik>
        </App>
    );
};

export default withAuthSync(Page);
