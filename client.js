import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from './redux/store';


// Get initial state from server-side rendering
const initialState = window.__INITIAL_STATE__;
const store = configureStore(initialState);
const mountNode = document.getElementById('app');

const renderApp = () => {
    const App = require('./components/app/app').default; // eslint-disable-line

    render(
        <AppContainer>
            <Provider store={store}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </Provider>
        </AppContainer>,
        mountNode
    );
};

// Enable hot reload by react-hot-loader
if (module.hot) {
    const reRenderApp = () => {
        try {
            renderApp();
        } catch (error) {
            const RedBox = require('redbox-react').default; //eslint-disable-line
            render(<RedBox error={error} />, mountNode);
        }
    };

    module.hot.accept('./components/app/app', () => {
        setImmediate(() => {
            unmountComponentAtNode(mountNode);
            reRenderApp();
        });
    });
}

renderApp();
