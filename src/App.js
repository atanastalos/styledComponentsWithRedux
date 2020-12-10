import React from 'react';
import {Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Register from "./components/Register/Register";
import UserData from "./components/UserData/UserData";
import GlobalStyle from "./GlobalStyle";

export default function App() {
    return (
        <Router>
            <GlobalStyle/>
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
