import styled from 'styled-components';

export const Container = styled.div`
    width: 812px;
    margin: 0 auto;
    display: flex;
    flex: 1 0 auto;
`;

export const InfoWrap = styled.div`
    margin: 0 auto;
    flex: 1 0 auto;
    margin-bottom: 20px;
`;

export const PersonInfo = styled.div`
    padding: 20px;
    display: flex;
    align-items: center;
    background-color: #fff;
    img {
        width: 60px;
        height: 60px;
        border-radius: 4px;
    }
`;

export const Tag = styled.span`
    margin-left: 10px;
    font-size: 12px;
    color: #fff;
    padding: 2px 5px;
    background: linear-gradient(60deg, #ab47bc, #8e24aa);
    box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(156, 39, 176, 0.4);
`;

export const PersonInfoLeft = styled.div`
    display: flex;
    flex: 1 0 auto;
`;

export const PersonInfoRight = styled.div`
    display: flex;
    align-items: center;
    svg {
        width: 24px;
        height: 24px;
        margin-right: 100px;
        fill: rgba(0, 0, 0, 0.45);
    }
    cursor: pointer;
`;

export const PersonInfoBody = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 10px;
`;

export const AuthorName = styled.div`
    color: rgba(0, 0, 0, 0.85);
    font-size: 16px;
`;

export const Detail = styled.div`
    margin-top: 20px;
    background-color: #fff;
    padding: 20px;
`;

export const StatisticalData = styled.div`
    display: flex;
    margin-top: 20px;
    background-color: #fff;
`;

export const StatisticalDataItem = styled.div`
    text-align: center;
    flex: 1 0 auto;
    margin-right: 20px;
    padding: 15px;
`;

export const StatisticalDataItemText = styled.div`
    display: block;
    color: rgba(0, 0, 0, 0.65);
`;

export const StatisticalDataItemCounter = styled.div`
    display: block;
    color: rgba(0, 0, 0, 0.65);
    font-weight: bold;
    margin-bottom: 5px;
`;

export const tabsWrap = styled.div`
    margin-top: 20px;
    background-color: #fff;
`;

export const TabsWrap = styled.div`
    margin-top: 20px;
    background-color: #fff;
`;

export const TableWrapDiv = styled.div`
    background-color: #fff;
    border-top: 1px solid #efefef;
    td {
        font-size: 14px;
    }
    a {
        font-weight: 700;
        color: rgba(0, 0, 0, 0.85);
    }
`;
