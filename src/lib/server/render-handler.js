import React from 'react';
import Promise from 'bluebird';
import HttpStatus from 'http-status-codes';
import { matchRoutes } from 'react-router-config';
import { StaticRouter } from 'react-router-dom';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import { Provider } from 'react-redux';
import configureStore from '../../redux/store';
import routes from '../../routes';
import App from '../../components/app/app';
import Html from '../../components/html/html';


const renderHtml = (store, htmlContent) => {
    const html = renderToStaticMarkup(<Html store={store} htmlContent={htmlContent} />);
    return `<!DOCTYPE html>${html}`;
};

const renderHandler = async (req, res) => {
    if (__DEV__) webpackIsomorphicTools.refresh();
    const store = configureStore();

    if (__DISABLE_SSR__) {
        return res.send(renderHtml(store));
    }

    const routePromises = matchRoutes(routes, req.url)
        .filter(({ route }) => route.component && route.component.fetchData)
        .map(({ route, match }) => route.component.fetchData(store, match.params));

    await Promise.all(routePromises);

    const routerContext = {};
    const content = renderToString(
        <Provider store={store}>
            <StaticRouter location={req.url} context={routerContext}>
                <App />
            </StaticRouter>
        </Provider>,
    );

    if (routerContext.url) {
        return res.redirect(HttpStatus.PERMANENTLY_MOVED, routerContext.url).setHeader('Location', routerContext.url);
    }

    return res.status(HttpStatus.OK).send(renderHtml(store, content));
};

export default renderHandler;
