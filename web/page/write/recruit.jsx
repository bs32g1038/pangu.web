import React, { useState } from 'react';
import { RecuritForm, RecuritTimeWrap } from './style';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import dayjs from 'dayjs';
dayjs.extend(relativeTime);
import { TextField, MenuItem } from '@material-ui/core';
import styles from './style.module.scss';

export default props => {
    const [values, setValues] = useState({
        startTime: dayjs(),
        endTime: dayjs(dayjs().valueOf() + 15 * 24 * 60 * 60 * 1000), //延后15天的有效时间
        location: '',
        job: '',
        staff: 1,
        finance: 1,
        salary: 1,
        education: 1,
        experience: 1,
        ...props.recruitInfo,
    });
    function handleChange(event) {
        event.persist();
        setValues(oldValues => ({
            ...oldValues,
            [event.target.name]: event.target.value,
        }));
        onChange(values);
    }
    function onChange(data) {
        if (props.onChange) {
            props.onChange(data);
        }
    }
    return (
        <RecuritForm>
            <RecuritTimeWrap>
                <p>招聘信息有效期（{dayjs(values.startTime).to(values.endTime, true)}）</p>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="YYYY-MM-DD"
                        margin="normal"
                        label="开始时间"
                        value={values.startTime}
                        onChange={date => {
                            setValues(values => {
                                const data = { ...values, startTime: date };
                                onChange(data);
                                return data;
                            });
                        }}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                    <span style={{ marginRight: 20 }}></span>
                    <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="YYYY-MM-DD"
                        margin="normal"
                        label="结束时间"
                        value={values.endTime}
                        onChange={date => {
                            setValues(values => {
                                const data = { ...values, startTime: date };
                                onChange(data);
                                return data;
                            });
                        }}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                </MuiPickersUtilsProvider>
            </RecuritTimeWrap>
            <div>
                <TextField
                    value={values.location}
                    name="location"
                    label="公司地点"
                    placeholder="请输入公司地点"
                    onChange={handleChange}
                    margin="normal"
                    variant="outlined"
                    className="location"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    value={values.job}
                    name="job"
                    label="工作职位"
                    placeholder="请输入工作职位"
                    onChange={handleChange}
                    margin="normal"
                    variant="outlined"
                    className="post"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    className={styles.select}
                    select
                    label="公司人员"
                    name="staff"
                    value={values.staff}
                    onChange={handleChange}
                    margin="normal"
                    variant="outlined"
                    InputLabelProps={{
                        shrink: true,
                    }}
                >
                    <MenuItem value={1}>20人以下</MenuItem>
                    <MenuItem value={2}>20-100人</MenuItem>
                    <MenuItem value={3}>100-499人</MenuItem>
                    <MenuItem value={4}>500人以上</MenuItem>
                </TextField>
            </div>
            <div>
                <TextField
                    className={styles.select}
                    select
                    label="学历"
                    name="education"
                    value={values.education}
                    onChange={handleChange}
                    margin="normal"
                    variant="outlined"
                    InputLabelProps={{
                        shrink: true,
                    }}
                >
                    <MenuItem value={1}>大专</MenuItem>
                    <MenuItem value={2}>本科</MenuItem>
                    <MenuItem value={3}>硕士</MenuItem>
                    <MenuItem value={4}>博士</MenuItem>
                </TextField>
                <TextField
                    className={styles.select}
                    select
                    label="薪资"
                    name="salary"
                    value={values.salary}
                    onChange={handleChange}
                    margin="normal"
                    variant="outlined"
                    InputLabelProps={{
                        shrink: true,
                    }}
                >
                    <MenuItem value={1}>6k-10k</MenuItem>
                    <MenuItem value={2}>8k-15k</MenuItem>
                    <MenuItem value={3}>15k-25k</MenuItem>
                    <MenuItem value={4}>25k以上</MenuItem>
                </TextField>
                <TextField
                    className={styles.select}
                    select
                    label="融资情况"
                    name="finance"
                    value={values.finance}
                    onChange={handleChange}
                    margin="normal"
                    variant="outlined"
                    InputLabelProps={{
                        shrink: true,
                    }}
                >
                    <MenuItem value={1}>不需要融资</MenuItem>
                    <MenuItem value={2}>天使轮</MenuItem>
                    <MenuItem value={3}>A轮</MenuItem>
                    <MenuItem value={4}>B轮</MenuItem>
                    <MenuItem value={5}>C轮</MenuItem>
                    <MenuItem value={6}>D轮</MenuItem>
                </TextField>
                <TextField
                    className={styles.select}
                    select
                    label="工作经验"
                    name="experience"
                    value={values.experience}
                    onChange={handleChange}
                    margin="normal"
                    variant="outlined"
                    InputLabelProps={{
                        shrink: true,
                    }}
                >
                    <MenuItem value={1}>不要求</MenuItem>
                    <MenuItem value={2}>1-3年</MenuItem>
                    <MenuItem value={3}>3-5年</MenuItem>
                    <MenuItem value={4}>5年以上</MenuItem>
                </TextField>
            </div>
        </RecuritForm>
    );
};
