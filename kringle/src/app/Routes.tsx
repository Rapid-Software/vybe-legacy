import React from 'react';
import { Route, Switch } from 'react-router';

// Pages
import { Home } from "./pages/Home";

interface RoutesProps {}

export const Routes: React.FC<RoutesProps> = () => {

    return (
        <Switch>
            <Route 
                exact
                path="/"
                component={Home}
            />
        </Switch>
    )

};

