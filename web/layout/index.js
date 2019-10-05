import React from 'react';
import serialize from 'serialize-javascript';
import { StylesProvider } from '@material-ui/styles';
import { SnackbarProvider } from 'notistack';
import styled, { ThemeProvider } from 'styled-components';
import { createMuiTheme, darken, fade } from '@material-ui/core/styles';

const defaultTheme = createMuiTheme({
    appContainer: '812px',
});

import './index.css';

const commonNode = props =>
    // 为了同时兼容ssr/csr请保留此判断，如果你的layout没有内容请使用 props.children ? { props.children } : ''
    props.children ? (
        <StylesProvider injectFirst>
            <SnackbarProvider maxSnack={1}>
                <ThemeProvider theme={defaultTheme}>{props.children}</ThemeProvider>
            </SnackbarProvider>
        </StylesProvider>
    ) : (
        ''
    );

const Layout = props => {
    if (__isBrowser__) {
        return commonNode(props);
    } else {
        const { serverData } = props.layoutData;
        const { injectCss, injectScript } = props.layoutData.app.config;
        return (
            <html lang="en">
                <head>
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                    <meta name="theme-color" content="#000000" />
                    <title>盘古社区</title>
                    {injectCss && injectCss.map(item => <link rel="stylesheet" href={item} key={item} />)}
                </head>
                <body>
                    <div id="app">{commonNode(props)}</div>
                    {serverData && (
                        <script
                            dangerouslySetInnerHTML={{
                                __html: `window.__USE_SSR__=true; window.__INITIAL_DATA__ =${serialize(serverData)}`,
                            }}
                        />
                    )}
                    <div
                        dangerouslySetInnerHTML={{
                            __html: injectScript && injectScript.join(''),
                        }}
                    />
                </body>
            </html>
        );
    }
};

export default Layout;
