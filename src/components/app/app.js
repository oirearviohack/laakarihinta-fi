import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import AppHead from './app-head';
import Main from '../layouts/main';
import localeActions from '../locale/locale-actions';
import '../../assets/styles/main.scss';


class App extends Component {

    static propTypes = {
        actions: PropTypes.shape({
            getLocale: PropTypes.func.isRequired
        }).isRequired
    };

    static fetchData(store) {
        return store.dispatch(localeActions.getLocale('en-GB'));
    }

    componentDidMount() {
        this.props.actions.getLocale('en-GB');
    }

    render() {
        return (
            <div className="app-container">
                <AppHead />
                <Main />
            </div>
        );
    }

}

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({ ...localeActions }, dispatch)
});

export default withRouter(connect(null, mapDispatchToProps)(App));
