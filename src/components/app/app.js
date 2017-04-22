import React from 'react';
import { withRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import AppHead from './app-head';
import routes from '../../routes';
import '../../assets/styles/main.scss';


const App = () => (
    <div className="app-container">
        <AppHead />
        {renderRoutes(routes)}
    </div>
);

export default withRouter(App);
