import React from 'react';
import './style.scss';
import AppHeader from '../../components/AppHeader';
import AppBottom from '../../components/AppBottom';
import AppIntruduce from '../../components/AppIntruduce';
import AuthorRanking from '../../components/AuthorRanking';
import AppFooter from '../../components/AppFooter';
import Content from './content';

export default () => {
    return (
        <React.Fragment>
            <AppHeader></AppHeader>
            <AppIntruduce></AppIntruduce>
            <Content></Content>
            <AuthorRanking></AuthorRanking>
            <AppBottom></AppBottom>
            <AppFooter></AppFooter>
        </React.Fragment>
    );
};
