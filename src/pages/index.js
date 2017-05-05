import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './home/home';



const Pages = () => (
    <div className="o-main-layout__content">
        <Switch>
            <Route path="/home" component={HomePage} />
        </Switch>
    </div>
);

export default Pages;
