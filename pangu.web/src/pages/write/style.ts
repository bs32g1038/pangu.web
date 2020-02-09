import styled from 'styled-components';
import { Paper as _Paper } from '@material-ui/core';
import _FormControl from '@material-ui/core/FormControl';
export const Wrap = styled.div`
    padding: 20px;
    background-color: #fff;
    h3 {
        margin: 0;
    }
    > p {
        margin: 10px 0 0;
    }
    .form {
        display: flex;
        flex-direction: column;
    }
    .select-form-control {
        margin-top: 20px;
    }
    .title {
        margin-bottom: 20px;
    }
    .select {
        width: 150px;
        margin-bottom: 20px;
        font-size: 14px;
        margin-right: 20px !important;
        .MuiSelect-root {
            font-size: 0.8125rem;
        }
    }
    .topic-tag-label {
        background-color: #fff;
        padding-left: 6px;
        padding-right: 6px;
    }
    .select-tags {
        width: 340px;
    }
`;

export const Paper = styled(_Paper)`
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    a {
        font-size: 14px;
    }
    p {
        font-size: 14px;
    }
    .breadcrumb {
        flex: 1 0 auto;
    }
`;

export const FormControl = styled(_FormControl)`
    /* display: block !important; */
    /* margin: 20px 0 !important; */
    .MuiChip-root {
        margin-right: 10px;
    }
`;

export const CheckboxFormControl = styled.div`
    margin: 20px 8px;
`;

export const RecuritForm = styled.div`
    padding: 10px 20px;
    background-color: #f5f5f5;
    .location {
        margin-right: 20px;
        max-width: 320px;
        width: 100%;
    }
    .post {
        margin-right: 20px;
    }
`;

export const RecuritTimeWrap = styled.div`
    margin-bottom: 8px;
    border-radius: 4px;
    p {
        margin: 0;
    }
`;
