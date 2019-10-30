import styled from 'styled-components';
import React from 'react';
import AppHeader from '@pangu/client/web/components/AppHeader';
import AppFooter from '@pangu/client/web/components/AppFooter';

const PageWrap = styled.div`
    flex: 1 0 auto;
    background-color: #fff;
`;

export default (props: { children: any }) => {
    const children = props.children;
    return (
        <div className="app">
            <AppHeader />
            <PageWrap>{children}</PageWrap>
            <AppFooter />
        </div>
    );
};
