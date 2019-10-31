import { grayColor, infoColor } from '@pangu/client/web/theme/color';
import styled from 'styled-components';

export const Right = styled.div`
    position: absolute;
    right: 20px;
    top: 6.5px;
    font-size: 12px;
    color: rgba(0, 0, 0, 0.45);
    line-height: 1.5;
`;

export const Pagination = styled.ul`
    display: inline-block;
    margin: 0;
    padding: 0;
    border-radius: 4px;
    position: relative;
    width: 100%;
`;

export const PaginationItem = styled.li`
    display: inline;
`;

export const PaginationLink = styled.div<{ active: boolean; disabled: boolean }>`
    .MuiButton-root {
        &:first-of-type {
            margin-left: 0;
        }
        letter-spacing: unset;
        border: 0;
        transition: all 0.3s;
        padding: 0px 11px;
        margin: 0 3px;
        min-width: 30px;
        height: 30px;
        min-height: auto;
        line-height: 30px;
        font-weight: 400;
        font-size: 12px;
        text-transform: uppercase;
        background: transparent;
        position: relative;
        float: left;
        text-decoration: none;
        box-sizing: border-box;
        &:hover,
        &:focus {
            color: ${grayColor};
        }
        &:hover,
        &:focus {
            z-index: 3;
            background-color: ${infoColor};
            border-color: ${infoColor};
            cursor: default;
            color: #ffffff;
            box-shadow: '0 4px 5px 0 rgba(0, 188, 212, 0.14), 0 1px 10px 0 rgba(0, 188, 212, 0.12), 0 2px 4px -1px rgba(0, 188, 212, 0.2)';
        }
        &:hover {
            cursor: pointer;
        }
        background-color: ${props => (props.active ? infoColor : '#eee')};
        border-color: ${props => (props.active ? infoColor : '#eee')};
        ${props =>
            props.active &&
            `
                cursor: default;
                color: #FFFFFF;
                boxShadow: '0 4px 5px 0 rgba(0, 188, 212, 0.14), 0 1px 10px 0 rgba(0, 188, 212, 0.12), 0 2px 4px -1px rgba(0, 188, 212, 0.2)',
            `}
        ${props =>
            props.disabled &&
            `
            &:hover,&:focus{
                color: #777;
                cursor: not-allowed;
                backgroundColor: #fff;
                borderColor: #ddd;
            }
        `}
    }
`;
