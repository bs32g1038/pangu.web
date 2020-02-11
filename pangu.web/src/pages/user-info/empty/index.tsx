import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
    text-align: center;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    > img {
        width: 110px;
        display: block;
    }
    .empty-tips {
        height: 64px;
        line-height: 64px;
        font-size: 14px;
        color: #a8b7c7;
    }
`;

export default () => {
    return (
        <Wrap>
            <img src={require('../../../assets/empty.png')} alt="" />
            <div className="empty-tips">暂无数据~</div>
        </Wrap>
    );
};
