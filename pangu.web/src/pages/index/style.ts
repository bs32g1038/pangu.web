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
