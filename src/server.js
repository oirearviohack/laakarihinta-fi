import express from 'express';
import compression from 'compression';
import helmet from 'helmet';
import hpp from 'hpp';
import favicon from 'serve-favicon';
import path from 'path';
import { port } from './config';
import apiRouter from './server/api-router';
import logging from './lib/server/logging';
import healthCheck from './lib/server/health-check';
import enableDevelopmentSettings from './lib/server/enable-development-settings';
import renderHandler from './lib/server/render-handler';


const app = express();

console.log('Call me maybe');

app.use(healthCheck);
app.use(helmet());
app.use(hpp());
app.use(compression());
app.use(logging());

if (__DEV__) enableDevelopmentSettings(app);

app.use(favicon(path.join(process.cwd(), './build/public/favicon.ico')));
app.use(express.static(path.join(process.cwd(), './build/public')));
app.use('/api', apiRouter);
app.use(renderHandler);

app.listen(port, (error) => {
    if (error) throw error;
    if (__DEV__) require('../tools/openBrowser').default(port);
    console.log('Express server listening on port', port);
});
