import React from 'react';
import App from 'next/app';
import { ThemeProvider } from 'styled-components';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/theme';
import { createGlobalStyle } from 'styled-components';
import withReduxStore from '../src/libs/with-redux-store';
import { Provider } from 'react-redux';

const GlobalStyle = createGlobalStyle`
    body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol' !important ;
    }
    html,
    body,
    #__next,
    .app {
        height: 100%;
        min-height: 100%;
        background-color: #f5f5f5;
    }
    .app {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 820px;
        margin: 0 auto;
    }
    a{
        text-decoration: none;
    }
`;

class MyApp extends App<any, any> {
    componentDidMount() {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentNode.removeChild(jssStyles);
        }
    }

    render() {
        const { Component, pageProps, reduxStore } = this.props;
        return (
            <Provider store={reduxStore}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <GlobalStyle />
                    <Component {...pageProps} />
                </ThemeProvider>
            </Provider>
        );
    }
}

export default withReduxStore(MyApp);
