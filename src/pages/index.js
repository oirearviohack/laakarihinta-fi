import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AboutPage from './about/about';
import BlogPage from './blog/blog';
import ContactPage from './contact/contact';
import HomePage from './home/home';
import PackagesPage from './packages/packages';


const Pages = () => (
    <div className="o-main-layout__content">
        <Switch>
            <Route path="/home" component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/packages" component={PackagesPage} />
            <Route path="/blog" component={BlogPage} />
            <Route path="/contact" component={ContactPage} />
        </Switch>
    </div>
);

export default Pages;
