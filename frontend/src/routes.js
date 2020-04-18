import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import TelaPrincipal from './pages/TelaPrincipal';
import Register from './pages/Register';
import Login from './pages/Login';
import About from './pages/About';

export default function(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={TelaPrincipal}/>
                <Route path="/register" component={Register}/>
                <Route path="/login" component={Login}/>
                <Route path="/about" component={About}/>
            </Switch>
        </BrowserRouter>
    )
}