import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import Header from '../header/header';
import Footer from '../footer/footer';
import localeActions from '../locale/locale-actions';


class Main extends Component {

    static fetchData(store) {
        return store.dispatch(localeActions.getLocale('en-GB'));
    }

    static propTypes = {
        route: PropTypes.shape({
            routes: PropTypes.array
        }).isRequired,
        actions: PropTypes.shape({
            getLocale: PropTypes.func.isRequired
        }).isRequired
    };

    componentDidMount() {
        this.props.actions.getLocale('en-GB');
    }

    render() {
        return (
            <div className="o-main-layout">
                <Header />
                <div className="o-main-layout__content">
                    {renderRoutes(this.props.route.routes)}
                </div>
                <Footer />
            </div>
        );
    }

}

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({ ...localeActions }, dispatch)
});

export default connect(null, mapDispatchToProps)(Main);
