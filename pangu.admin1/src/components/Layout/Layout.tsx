import React from 'react';
import styled from 'styled-components';
import { Route, Switch, withRouter } from 'react-router-dom';

// styles
import useStyles from './styles';

// components
import Header from '../Header';
import Sidebar from '../Sidebar';

// pages
import Dashboard from '../../pages/index';
import Articles from '../../pages/articles';
import ArticleEdit from '../../pages/article-edit';
import Nodes from '../../pages/nodes';
import NodeEdit from '../../pages/node-edit';

// context
import { useLayoutState } from '../../context/LayoutContext';

const MainContent = styled.div`
    min-height: calc(100vh - 64px);
    background-color: #fff;
    width: calc(100vw - 240px);
    padding: 20px 40px 20px 20px;
    .MuiTableCell-root {
        white-space: nowrap;
    }
`;

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
                        {/* <Route path="/admin/dashboard" component={Dashboard} /> */}
                        <Route path="/admin/article/edit/:topicId" component={ArticleEdit} />
                        <Route path="/admin/nodes" component={Nodes} />
                        <Route path="/admin/node/edit/:id" component={NodeEdit} />
                        <Route path="/admin/node/edit" component={NodeEdit} />
                        <Route path="/admin/articles" component={Articles} />
                    </Switch>
                </MainContent>
            </div>
        </div>
    );
}

export default withRouter(Layout);
