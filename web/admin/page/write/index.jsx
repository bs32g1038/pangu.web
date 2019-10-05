import React from 'react';
import AppHeader from '../../components/AppHeader';
import AppFooter from '../../components/AppFooter';
import Content from './content';

export default () => {
    return (
        <React.Fragment>
            <AppHeader></AppHeader>
            <Content></Content>
            <AppFooter></AppFooter>
        </React.Fragment>
    );
};
