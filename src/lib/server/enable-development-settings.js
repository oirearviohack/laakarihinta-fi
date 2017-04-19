import path from 'path';
import express from 'express';
import favicon from 'serve-favicon';


const enableDevelopmentSettings = (app) => {
    const webpack = require('webpack');
    const webpackDevMiddleware = require('webpack-dev-middleware');
    const webpackHotMiddleware = require('webpack-hot-middleware');
    const webpackConfig = require('../../../tools/webpack/webpack.client');
    const compiler = webpack(webpackConfig);

    app.use(favicon(path.join(process.cwd(), './build/public/favicon.ico')));
    app.use(express.static(path.join(process.cwd(), './build/public')));
    app.use(webpackDevMiddleware(compiler, {
        publicPath: webpackConfig.output.publicPath,
        hot: true,
        noInfo: true,
        stats: 'minimal'
    }));
    app.use(webpackHotMiddleware(compiler));
};

export default enableDevelopmentSettings;
