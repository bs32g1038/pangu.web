import React from 'react';
import AppHeader from '../../components/AppHeader';
import AppFooter from '../../components/AppFooter';
import Content from './content';
import AppLeftSidebar from '../../components/AppLeftSidebar';

export default () => {
    return (
        <React.Fragment>
            {/* <AppHeader></AppHeader> */}
            <Content></Content>
            {/* <AppFooter></AppFooter> */}
        </React.Fragment>
    );
};
