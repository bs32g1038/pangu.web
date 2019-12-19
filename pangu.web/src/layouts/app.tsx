import styled from 'styled-components';
import React from 'react';
import AppHeader from '../components/AppHeader';
import AppBottom from '../components/AppBottom';
import AppFooter from '../components/AppFooter';

const PageWrap = styled.div`
    flex: 1 0 auto;
`;

export default (props: { children: any }) => {
    const children = props.children;
    return (
        <div className="app">
            <AppHeader />
            <PageWrap>{children}</PageWrap>
            <AppBottom></AppBottom>
            <AppFooter />
        </div>
    );
};
