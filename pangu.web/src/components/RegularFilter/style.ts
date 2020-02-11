import styled from 'styled-components';

export const FilterTable = styled.table`
    width: 100%;
    border: none;
    background-color: transparent;
    border-collapse: collapse;
    border-spacing: 0;
    font-size: 12px;
    a {
        text-decoration: none;
        color: #666666;
        font-size: 12px;
    }
    th {
        color: #000;
        font-weight: 700;
        width: 36px;
        text-align: left;
    }
    td {
        height: 36px;
    }
    .subforum_pipe {
        color: #cdcdcd;
        margin: 0 4px;
    }
    .pipe {
        margin-right: 10px;
        padding: 0;
        width: 1px;
        text-indent: -9999px;
        height: 12px;
        margin: 0 5px;
        color: #ccc;
        margin-top: 4px;
    }
    ul,
    li {
        float: left;
        list-style: none;
        margin: 0;
        padding: 0;
        padding-bottom: 7px;
    }
    .z {
        float: left;
    }
    .y {
        float: right;
    }
`;
