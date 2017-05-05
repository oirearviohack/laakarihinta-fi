import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { renderRoutes } from 'react-router-config';
import Header from '../header/header';


class Main extends Component {

    static propTypes = {
        route: PropTypes.shape({
            routes: PropTypes.array
        }).isRequired
    };

    componentDidMount() {
        const jssStyles = document.getElementById('jss-server-side');
        if (jssStyles && jssStyles.parentNode) {
            jssStyles.parentNode.removeChild(jssStyles);
        }
    }

    render() {
        return (
            <div className="o-main-layout">
                <Header />
                <div className="o-main-layout__content">
                    {renderRoutes(this.props.route.routes)}
                </div>
            </div>
        );
    }
}

export default Main;
