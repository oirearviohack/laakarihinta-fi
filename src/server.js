import express from 'express';
import compression from 'compression';
import helmet from 'helmet';
import hpp from 'hpp';
import favicon from 'serve-favicon';
import path from 'path';
import forceDomain from 'forcedomain';
import { port } from './config';
import apiRouter from './server/api-router';
import healthCheck from './lib/server/health-check';
import enableDevelopmentSettings from './lib/server/enable-development-settings';
import renderHandler from './lib/server/render-handler';
import wrap from './lib/server/wrap';
import { logErrors, catchAllErrorHandler, clientErrorHandler } from './lib/server/error-handlers';


const app = express();
app.use(healthCheck);
app.use(forceDomain({ hostname: 'wwwonderful.com', protocol: 'https' }));
app.use(helmet());
app.use(hpp());
app.use(compression());
// app.use(logging()); // TODO: What is the best way for us to do logging? Right now builds up inside instance (not good)

if (__DEV__) enableDevelopmentSettings(app);

app.use(favicon(path.join(process.cwd(), './build/public/favicon.ico')));
app.use(express.static(path.join(process.cwd(), './build/public'), { maxAge: '7d' }));
app.use('/api', apiRouter);
app.use(wrap(renderHandler));
app.use(logErrors);
app.use(clientErrorHandler);
app.use(catchAllErrorHandler);


app.listen(port, (error) => {
    if (error) throw error;
    if (__DEV__) require('../tools/openBrowser').default(port);
    console.log('Express server listening on port', port);
});
