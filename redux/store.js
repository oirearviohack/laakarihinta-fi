import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './root-reducer';


const configureStore = (initialState) => {
    const middlewares = [
        thunk
    ];

    const enhancers = [
        applyMiddleware(...middlewares),
        __DEV__ && typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ?
        window.devToolsExtension() : f => f
    ];

    const store = createStore(rootReducer, initialState, compose(...enhancers));

    if (module.hot) {
        module.hot.accept('./root-reducer', () => {
            try {
                const nextReducer = require('./root-reducer').default;
                store.replaceReducer(nextReducer);
            } catch (err) {
                console.error(`Reducer hot reloading error ${err}`);
            }
        });
    }

    return store;
};

export default configureStore;
