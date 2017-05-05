/* eslint-disable react/no-danger, max-len */
import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import serialize from 'serialize-javascript';
import _ from 'lodash';


const propTypes = {
    store: PropTypes.object.isRequired,
    htmlContent: PropTypes.string.isRequired,
    materialCSS: PropTypes.string.isRequired
};

const Html = ({ store, htmlContent, materialCSS }) => {
    const head = Helmet.renderStatic();
    const attrs = head.htmlAttributes.toComponent();
    const { lang, ...rest } = attrs || {};
    const assets = webpackIsomorphicTools.assets(); // eslint-disable-line no-undef

    return (
        <html {...rest} lang={lang || 'en'}>
            <head>
                {head.title.toComponent()}
                {head.base.toComponent()}
                {head.meta.toComponent()}
                {head.link.toComponent()}
                {_.keys(assets.styles).map(style =>
                    <link
                        key={_.uniqueId()}
                        href={assets.styles[style]}
                        media="screen, projection"
                        rel="stylesheet"
                        type="text/css"
                  />,
                )}
            </head>
            <body>
                <div id="app" dangerouslySetInnerHTML={{ __html: htmlContent || '' }} />
                <script dangerouslySetInnerHTML={{ __html: store && `window.__INITIAL_STATE__=${serialize(store.getState())};` }} />
                {_.keys(assets.javascript).reverse().map(script =>
                    <script key={_.uniqueId()} src={assets.javascript[script]} />,
                )}
                {head.script.toComponent()}
                <style id="jss-server-side">{materialCSS}</style>
            </body>
        </html>
    );
};

Html.defaultProps = {
    htmlContent: '',
    materialCSS: ''
};

Html.propTypes = propTypes;

export default Html;
