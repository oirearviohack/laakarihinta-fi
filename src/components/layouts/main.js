import React from 'react';
import PropTypes from 'prop-types';
import { renderRoutes } from 'react-router-config';
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';


const Main = ({ route }) => (
    <div className="o-main-layout">
        <Navbar />
        <div className="o-main-layout__content">
            {renderRoutes(route.routes)}
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
