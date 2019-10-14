import React, { useState, useEffect } from 'react';
import AppHeader from '../../components/AppHeader';
import AppFooter from '../../components/AppFooter';
import { Link } from 'react-router-dom';
import {
    TextField,
    FormControl,
    MenuItem,
    Breadcrumbs,
    Paper,
    Typography,
    Button,
    FormControlLabel,
    Checkbox,
} from '@material-ui/core';
import Vditor from 'vditor';
import 'vditor/src/assets/scss/classic.scss';
import { fetchNodes } from '../../api/node';
import { fetchTopicById, createTopic, updateTopic } from '../../api/topic';
import styles from './style.module.scss';
import queryString from 'query-string';
import * as oauth from '../../utils/oauth';
import Recruit from './recruit';

const initEditor = () => {
    const vditor = new Vditor('markdownEditor', {
        height: 240,
        preview: {
            mode: 'editor',
        },
        placeholder: '请输入正文',
        editor: false,
    });
    vditor.setValue('');
    return vditor;
};

const Page = props => {
    const user = oauth.getLoginInfo();
    const [nodes, setNodes] = useState([]);
    const [editor, setEditor] = useState(null);
    const [isSuccessMessageShow, setSuccessMessageShow] = useState(false);
    const [values, setValues] = useState({
        id: null,
        title: '',
        node: '',
        type: '',
        content: '',
        good: false,
        top: false,
        userId: user.id,
        recruitInfo: null,
    });

    useEffect(() => {
        const vditor = initEditor();
        setEditor(vditor);

        fetchNodes().then(res => {
            setNodes(res.data.data.rows);
        });
        const query = queryString.parse(props.location.search);
        if (query.topicId) {
            fetchTopicById(query.topicId).then(res => {
                const topic = res.data.data;
                setValues({
                    id: query.topicId,
                    title: topic.title,
                    node: topic.nodeId,
                    type: topic.type,
                    content: topic.content,
                    good: topic.good,
                    top: topic.top,
                    recruitInfo: topic.recruitInfo,
                });
                vditor.setValue(topic.content);
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
        <React.Fragment>
            <AppHeader></AppHeader>
            <div className={styles.wrap}>
                <Paper elevation={0} className={styles.paper}>
                    <Breadcrumbs aria-label="breadcrumb" className={styles.breadcrumb}>
                        <Link color="inherit" to="/">
                            主页
                        </Link>
                        <Typography color="textPrimary">发布话题</Typography>
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
                                // props.enqueueSnackbar('提交成功');
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
                    <div className={styles.formControl}>
                        <TextField
                            id="standard-select-currency"
                            className={styles.select}
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
                                className={styles.select}
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
                    </div>
                    <div className={styles.checkboxFormControl}>
                        <FormControlLabel
                            className={styles.checkbox}
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
                            className={styles.checkbox}
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
                    </div>
                    {values.type === 3 && (
                        <Recruit
                            recruitInfo={values.recruitInfo}
                            onChange={recruitInfo => {
                                console.log(recruitInfo, "--1--1-1-1-1--");
                                setValues({ ...values, recruitInfo })
                            }}
                        ></Recruit>
                    )}
                    <FormControl variant="outlined" className={styles.markdownEditorWrap}>
                        <div id="markdownEditor" className={styles.markdownEditor}></div>
                    </FormControl>
                    <FormControl className={styles.formControl}></FormControl>
                </form>
            </div>
            <AppFooter></AppFooter>
        </React.Fragment>
    );
};

Page.getInitialProps = async ctx => {
    if (!oauth.isLogin()) {
        window.location.href = '/login';
        return {};
    }
};

export default Page;
