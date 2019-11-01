import { primaryColor, dangerColor, successColor } from '@pangu/client/web/theme/color';
import styled from 'styled-components';
import _FormControl from '@material-ui/core/FormControl';
import _InputLabel from '@material-ui/core/InputLabel';
import _Input from '@material-ui/core/Input';

export const FormControl = styled(_FormControl)`
    &.MuiFormControl-root {
        padding-top: 27px;
        position: relative;
    }
    svg,
    .fab,
    .far,
    .fal,
    .fas,
    .material-icons {
        color: #495057;
    }
`;

export const InputLabel = styled(_InputLabel)`
    &.labelRoot {
        color: rgba(0, 0, 0, 0.65) !important;
        font-weight: 400;
        font-size: 18px;
        line-height: 1.5;
        top: 10px;
        letter-spacing: unset;
        font-family: inherit;
        + .underline {
            margin-top: 0px;
        }
    }
    &.labelRootError {
        color: ${dangerColor};
    }
    &.labelRootSuccess {
        color: ${successColor};
    }
`;

export const Input = styled(_Input)`
    input {
        color: #495057;
        height: unset;
        &::placeholder {
            font-size: 14px;
            font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
            font-weight: 400;
            line-height: 1.42857;
            opacity: 1;
        }
        &::placeholder {
            color: #aaaaaa;
        }
    }
    &.whiteInput {
        &::placeholder {
            color: #ffffff;
            opacity: 1;
        }
    }
    &.underline {
        margin-top: 10px !important;
        &:hover:not($disabled):before,
        &:before {
            border-color: #d2d2d2 !important;
            border-width: 1px !important;
        }
        &:after {
            border-color: primaryColor;
        }
    }
    &.underlineError {
        &:after {
            border-color: ${dangerColor};
        }
    }
    &.underlineSuccess {
        &:after {
            border-color: ${successColor};
        }
    }
    &.whiteUnderline {
        &:hover:not($disabled):before,
        &:before {
            border-color: #ffffff;
        }
        &:after {
            border-color: #ffffff;
        }
    }
    &.disabled {
        &:before {
            border-color: transparent !important;
        }
    }
`;
