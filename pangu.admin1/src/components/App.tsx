import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';

// components
import Layout from './Layout/Layout';

// pages
// import Error from '../pages/error/Error';
// import Login from '../pages/login/Login';

// context
import { useUserState } from '../context/UserContext';

export default function App() {
    // global
    const { isAuthenticated = true } = useUserState() as any;

    return (
        <HashRouter>
            <Switch>
                <Route exact path="/" render={() => <Redirect to="/admin/articles" />} />
                <Route exact path="/admin" render={() => <Redirect to="/admin/articles" />} />
                <PrivateRoute path="/admin" component={Layout} />
                {/* <PublicRoute path="/login" component={Login} />
                <Route component={Error} /> */}
            </Switch>
        </HashRouter>
    );

    // #######################################################################

    function PrivateRoute({ component, ...rest }) {
        return (
            <Route
                {...rest}
                render={props =>
                    true ? (
                        React.createElement(component, props)
                    ) : (
                        <Redirect
                            to={{
                                pathname: '/login',
                                state: {
                                    from: props.location,
                                },
                            }}
                        />
                    )
                }
            />
        );
    }

    function PublicRoute({ component, ...rest }) {
        return (
            <Route
                {...rest}
                render={props =>
                    isAuthenticated ? (
                        <Redirect
                            to={{
                                pathname: '/',
                            }}
                        />
                    ) : (
                        React.createElement(component, props)
                    )
                }
            />
        );
    }
}
