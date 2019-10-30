import styled from 'styled-components';
import _Button from '@material-ui/core/Button';
import _SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles';
import blueGrey from '@material-ui/core/colors/blueGrey';

export const Container = styled.div`
    padding: 0 20px;
    transition: width 0.2s;
    width: ${props => props.theme.appContainer};
    display: flex;
    align-items: center;
    background-color: #fff;
    border-bottom: 1px solid #f1f1f1;
`;

export const HeaderTitle = styled.h1`
    float: left;
    vertical-align: top;
    font-size: 18px;
    font-weight: normal;
    margin: 0 15px 0 0;
    line-height: 34px;
`;

export const HeaderTitleLink = styled.a`
    display: flex;
    align-items: center;
    color: rgba(0, 0, 0, 0.85);
    font-size: 16px;
    > h1 {
        font-size: 16px;
        margin: 0 0 0 12px;
        color: rgba(0, 0, 0, 0.87);
        font-weight: 500;
    }
    .logo {
        max-height: 40px;
        vertical-align: middle;
    }
`;

export const HeaderNavWrap = styled.ul`
    flex: 1 0 auto;
    padding-left: 0;
`;

export const HeaderNavItem = styled.li`
    display: inline-block;
    vertical-align: middle;
    margin-right: 15px;
    margin-left: 15px;
    svg {
        margin-right: 4px;
    }
`;

export const Button = styled(_Button)`
    &.MuiButton-root {
        font-size: 14px;
        color: rgba(0, 0, 0, 0.65);
    }
    &.write {
        font-size: 13px;
    }
`;

export const HeaderControlWrap = styled.ul`
    display: inline-block;
    vertical-align: middle;
    padding-left: 0;
    > li {
        display: inline-block;
        vertical-align: middle;
        margin-right: 20px;
        &:last-child {
            margin-right: 0;
        }
    }
`;

export const Search = styled.div`
    transition: margin-left 0.4s;
    position: relative;
    width: 100%;
    position: relative;
    border-radius: ${props => props.theme.shape.borderRadius}px;
    border: 1px solid ${props => fade(props.theme.palette.common.black, 0.07)};
    background-color: rgba(227, 231, 236, 0.2);
    display: flex;
    align-items: center;
    &:hover {
        background-color: ${props => fade(props.theme.palette.common.white, 0.1)};
    }
    ${props => props.theme.breakpoints.up('sm')} {
        width: auto;
    }
`;

export const SearchIcon = styled(_SearchIcon)`
    pointer-events: none;
    color: ${blueGrey[400]};
    margin-left: 10px;
`;

export const SearchInput = styled(InputBase)`
    overflow: hidden;
    input {
        float: left;
        width: 100%;
        padding-left: 32px;
        padding-right: 32px;
        -webkit-transition: all 0.4s;
        -o-transition: all 0.4s;
        transition: all 0.4s;
        box-sizing: inherit !important;
        padding: ${props => props.theme.spacing(1, 1, 1, 1)};
        transition: ${props => props.theme.transitions.create('width')};
        font-size: 14px;
        color: inherit;
        height: auto;
        line-height: normal;
        color: #666;
        ${props => props.theme.breakpoints.up('md')} {
            width: 200px;
        }
    }
`;
