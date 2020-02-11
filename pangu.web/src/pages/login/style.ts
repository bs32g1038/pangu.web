import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';
import _IconSnackbarContent from '../../components/IconSnackbarContent';
import { Form as _Form } from 'formik';

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
    display: flex;
    align-items: center;
    padding: 15px;
    flex: 1 0 auto;
    font-size: 16px;
    background-color: #fff;
    color: rgba(0, 0, 0, 0.85);
    cursor: pointer;
    text-align: center;
    img {
        width: 32px;
        display: block;
        margin-right: 5px;
    }
`;

export const CloseButton = styled(IconButton)`
    &.MuiIconButton-root {
        position: absolute;
        right: 10px;
        top: 7px;
    }
`;

export const Form = styled(_Form)`
    padding: 10px 18px 24px;
    flex: 1 0 auto;
    margin: 0;
    .email {
        margin-top: 20px;
        margin-bottom: 20px;
    }
    .email,
    .password {
        font-size: 14px;
    }
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
    color: #767676;
    display: flex;
    align-items: center;
`;

export const Oauth = styled.div`
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
    color: #767676;
    a {
        color: #007fff;
    }
`;

export const IconSnackbarContent = styled(_IconSnackbarContent)`
    &.MuiSnackbarContent-root {
        padding-top: 0;
        padding-bottom: 0;
        margin-top: 10px;
        margin-bottom: 10px;
    }
`;
