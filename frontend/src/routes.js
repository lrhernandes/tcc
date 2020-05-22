import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import TelaPrincipal from './pages/TelaPrincipal';
import Register from './pages/Register';
import Login from './pages/Login';
import About from './pages/About';
import Home from './pages/Home';
import ClientAnnouncements from './pages/ClientAnnouncements';

export default function(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={TelaPrincipal}/>
                <Route path="/register" component={Register}/>
                <Route path="/login" component={Login}/>
                <Route path="/about" component={About}/>
                <Route path="/home" component={Home}/>
                <Route path="/myannouncements" component={ClientAnnouncements}/>
            </Switch>
        </BrowserRouter>
    )
}