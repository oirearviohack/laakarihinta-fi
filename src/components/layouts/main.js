import React from 'react';
import PropTypes from 'prop-types';
import { renderRoutes } from 'react-router-config';
import Header from '../header/header';
import Footer from '../footer/footer';


const Main = props => (
    <div className="o-main-layout">
        <Header />
        <div className="o-main-layout__content">
            {renderRoutes(props.route.routes)}
        </div>
        <Footer />
    </div>
);

Main.propTypes = {
    route: PropTypes.shape({
        routes: PropTypes.array
    }).isRequired
};

export default Main;
