import React from 'react';
import {Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Register from "./Register";
import UserData from "./UserData";

export default function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Register/>
                </Route>
                <Route path="/userdata">
                    <UserData/>
                </Route>
            </Switch>
        </Router>
    );
}
