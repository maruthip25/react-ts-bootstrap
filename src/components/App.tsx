import * as React from 'react';
import {
    HashRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import { Nav } from './Nav';

export const App = () => (
    <div>
        <h1>React TypeScript Bootstrap</h1>
        <Router>
            <Nav/>
            <Switch>
                <Route exact path="/">
                    <span>Home</span>
                </Route>
                <Route exact path="/about">
                    <span>About</span>
                </Route>
            </Switch>
        </Router>
    </div>
);