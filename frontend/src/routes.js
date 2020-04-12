import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import TelaPrincipal from './pages/TelaPrincipal';

export default function(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" component={TelaPrincipal}/>
            </Switch>
        </BrowserRouter>
    )
}