import fs from 'fs';
import path from 'path';
import spdy from 'spdy';
import morgan from 'morgan';
import express from 'express';
import compression from 'compression';
import helmet from 'helmet';
import hpp from 'hpp';
import favicon from 'serve-favicon';
import { port } from './config';
import apiRouter from './server/api-router';
import renderHandler from './lib/server/render-handler';


const app = express();
// app.use(forceSSL); find a way to force SSL
app.use(helmet());
app.use(hpp());
app.use(compression());

app.use(morgan('dev', { skip: (req, res) => res.statusCode < 400 }));
app.use(favicon(path.join(process.cwd(), './build/public/favicon.ico')));
app.use(express.static(path.join(process.cwd(), './build/public')));

if (__DEV__) {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'; // Insecure way of disabling self-signed SSL certificates for DEV
    const webpack = require('webpack');
    const webpackDevMiddleware = require('webpack-dev-middleware');
    const webpackHotMiddleware = require('webpack-hot-middleware');
    const webpackConfig = require('../tools/webpack/webpack.client');
    const compiler = webpack(webpackConfig);

    app.use(webpackDevMiddleware(compiler, {
        publicPath: webpackConfig.output.publicPath,
        hot: true,
        noInfo: true,
        stats: 'minimal'
    }));
    app.use(webpackHotMiddleware(compiler));
}

app.use('/api', apiRouter);
app.use(renderHandler);

spdy
    .createServer({
        key: fs.readFileSync('key.pem'),
        cert: fs.readFileSync('cert.pem')
    }, app)
    .listen(port, (err) => { // eslint-disable-line
        if (err) {
            console.error(err);
            return process.exit(1);
        }
        console.info(`Express app listening on port ${port}`);
        require('../tools/openBrowser').default(port);
    });
