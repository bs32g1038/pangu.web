import styled from 'styled-components';

export const Footer = styled.footer`
    clear: both;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    padding: 0 20px;
    border-top: 1px solid #efefef;
    position: relative;
`;

export const FooterMain = styled.div`
    color: rgba(0, 0, 0, 0.65);
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
    .num {
        color: rgba(0, 0, 0, 0.45);
    }
`;

export const Spread = styled.div`
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

export const FooterMainInfo = styled.div`
    display: flex;
    margin-top: 20px;
    margin-bottom: 20px;
    opacity: 0.7;
    transition: opacity 0.3s ease 0s;
    width: 100%;
`;

export const FooterMainInfoItem = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1 0 auto;
    .site-info {
        display: flex;
        align-items: end;
        margin-bottom: 10px;
    }
    .site-logo {
        width: 20px;
        height: 20px;
        margin-right: 8px;
    }
    a {
        color: #666;
        display: block;
        font-size: 0.8rem;
        margin-bottom: 5px;
        transition: color 0.2s ease 0s;
    }
    .contact-title {
        color: #666;
        margin-bottom: 12px;
        font-size: 0.9rem;
    }
    .social-list {
        display: flex;
    }
    svg {
        width: 16px;
        height: 16px;
        fill: #666;
        display: block;
        margin-right: 8px;
    }
    ._title {
        color: #666;
        margin-bottom: 12px;
        font-size: 0.9rem;
    }
    ._body {
        display: flex;
        flex-direction: column;
        color: #666;
        a {
            color: #666;
            font-size: 0.8rem;
            margin-bottom: 8px;
            margin-top: 0px;
            transition: color 0.2s ease 0s;
            :hover {
                color: rgb(92, 134, 139);
                cursor: pointer;
                text-decoration: underline;
            }
        }
    }
`;

export const AdvInfo = styled.div`
    display: flex;
    margin-bottom: 10px;
`;

export const BackTopBtn = styled.div`
    color: #333;
    cursor: pointer;
    position: absolute;
    right: -40px;
    bottom: 40px;
    text-align: center;
    width: 44px;
    background: #fff;
    width: 40px;
    height: 40px;
    line-height: 40px;
    background-color: #fff;
    svg {
        fill: #8590a6;
        vertical-align: middle;
    }
`;
