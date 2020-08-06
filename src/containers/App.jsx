import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './Home.jsx';
import Login from './Login.jsx';
// import NotFound from './NotFound.jsx';

function App() {
    return (
        <BrowserRouter>
                <Switch>
                    <Route exact path="/" component = {Home} />
                    <Route exact path="/login" component = {Login} />
                    {/* <Route component = {NotFound} /> */}
                </Switch>
        </BrowserRouter>
    );

}

export default App;