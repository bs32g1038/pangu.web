import styled from 'styled-components';

export const Wrap = styled.div`
    flex: 1 0 auto;
    margin-right: 20px;
    border-radius: 4px;
    position: relative;
    max-width: 320px;
    margin: 0 auto;
    background-color: #fff;
    min-height: 100%;
`;

export const Logo = styled.a`
    display: block;
    padding: 24px 0 8px;
    flex: 1 0 auto;
    font-size: 16px;
    background-color: #fff;
    color: rgba(0, 0, 0, 0.85);
    cursor: pointer;
    text-align: center;
    img {
        width: 32px;
        display: block;
        margin: 0 auto 5px;
    }
`;

export const Form = styled.div`
    padding: 10px 18px 24px;
    flex: 1 0 auto;
    margin: 0;
`;

export const Footer = styled.footer`
    display: flex;
    margin-top: 20px;
    justify-content: space-between;
`;

export const PromptBox = styled.div`
    margin: 20px 0 0;
    color: #767676;
    .clickable {
        color: #007fff;
        cursor: pointer;
    }
`;

export const OauthBox = styled.div`
    margin-top: 15px;
    color: #767676;
`;

export const Oauth = styled.div`
    margin-top: 15px;
    display: flex;
    justify-content: center;
`;

export const OauthBg = styled.div`
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background-color: #f4f8fb;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
        width: 24px;
    }
`;

export const AgreementBox = styled.div`
    margin-top: 20px;
    color: #767676;
    a {
        color: #007fff;
    }
`;
