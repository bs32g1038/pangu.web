import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
    display: flex;
    transition: width 0.2s;
    padding: 20px;
    align-items: center;
    background-color: #fff;
    border-bottom: 1px solid rgba(48, 40, 40, 0.1);
    h3 {
        margin: 0;
    }
    p {
        margin: 10px 0 0;
    }
    .left {
        flex: 1 0 auto;
    }
`;

export default () => {
    return (
        <Wrap>
            <div className="left">
                <h3>盘古论坛</h3>
                <p>最专业的，漂亮的轻论坛技术社区</p>
            </div>
            {/* <div>
                <span className={styles.label}>主题总数：</span> <span className={styles.count}>54</span>
            </div> */}
        </Wrap>
    );
};
