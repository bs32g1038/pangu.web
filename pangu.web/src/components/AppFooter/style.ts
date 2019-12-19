import styled from 'styled-components';

export const Footer = styled.footer`
    clear: both;
    background-color: #fff;
    display: flex;
    padding: 0 20px;
    border-top: 1px solid #efefef;
`;

export const FooterMain = styled.div`
    color: rgba(0, 0, 0, 0.65);
    padding: 20px 0;
    font-size: 13px;
    line-height: 1.5;
    padding-left: 8px;
    p {
        margin-top: 0;
    }
    a {
        color: rgba(0, 0, 0, 0.65);
        font-weight: 600;
    }
`;

export const Spread = styled.div`
    padding: 20px 0;
    background-color: #fff;
    a {
        display: block;
        width: 180px;
    }
    img {
        width: 100%;
        height: auto;
        border-radius: 4px;
    }
`;
