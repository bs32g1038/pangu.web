import React from 'react';
import styled from 'styled-components';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

// pages
import Dashboard from '../../pages/index';
import Articles from '../../pages/articles';

const MainContent = styled.div`
    min-height: calc(100vh - 64px);
    background-color: #fff;
    width: calc(100vw - 240px);
    padding: 20px 40px 20px 20px;
    .MuiTableCell-root {
        white-space: nowrap;
    }
`;
// styles
import useStyles from './styles';

// components
import Header from '../Header';
import Sidebar from '../Sidebar';

// context
import { useLayoutState } from '../../context/LayoutContext';

function Layout(props) {
    const classes = useStyles();

    // global
    const layoutState: any = useLayoutState();

    return (
        <div className={classes.root}>
            <Sidebar />
            <div>
                <Header history={props.history} />
                <MainContent>
                    <Switch>
                        <Route path="/admin/dashboard" component={Dashboard} />
                        <Route path="/admin/articles" component={Articles} />
                    </Switch>
                </MainContent>
            </div>
        </div>
    );
}

export default withRouter(Layout);
