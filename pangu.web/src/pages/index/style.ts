import styled from 'styled-components';

export const Panel = styled.div`
    min-height: 380px;
    background-color: #fff;
`;

export const TabsWrap = styled.div`
    background-color: #fff;
    /* padding: 0 15px; */
    border-bottom: 1px solid #f0f0f0;
    .MuiTabs-indicator {
        height: 1px !important;
    }
    .icon {
        width: 16px;
        vertical-align: middle;
        margin-right: 5px;
    }
    .MuiTab-wrapper {
        width: 100%;
        display: flex;
        flex-direction: row;
        color: rgba(0, 0, 0, 0.65);
        font-size: 16px;
        align-items: center;
        *:first-child {
            margin-bottom: 0 !important;
        }
    }
    .MuiTab-root {
        min-height: 60px !important;
        @media (min-width: 960px) {
            min-width: 110px;
        }
    }
`;

export const PaginationWrap = styled.div`
    padding: 15px 20px;
`;

export const FilterPanel = styled.div`
    /* background: #fafafa; */
    margin: 15px 15px 15px;
    border-radius: 5px;
    padding: 9px 9px 0;
`;

export const SubforumTable = styled.table`
    width: 100%;
    border: none;
    border-bottom: 1px solid #ececec;
    margin-bottom: 9px;
    margin-top: 5px;
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
`;

export const CategoryList = styled.div`
    display: flex;
    font-size: 14px;
    align-items: center;
    margin-bottom: 20px;
    a {
        text-decoration: none;
        color: #666666;
        font-size: 14px;
        &.active {
            color: #ff6f3d;
            font-weight: 700;
        }
    }
    th {
        color: #000;
        font-weight: 700;
        width: 36px;
        text-align: left;
        vertical-align: top;
    }
    .subforum_pipe {
        color: #cdcdcd;
        margin: 0 4px;
    }
    .pipe {
        float: left;
        margin-right: 10px;
        padding: 0;
        width: 1px;
        background: #ccc;
        text-indent: -9999px;
        height: 12px;
        margin: 0 10px;
        color: #ccc;
        margin-top: 4px;
    }
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
        margin-left: 10px;
    }
    li {
        float: left;
        list-style: none;
        margin: 0;
        padding: 0;
    }
    svg,
    span {
        color: #657786;
        fill: #657786;
    }
`;

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
