/* eslint-disable global-require */
const WebpackIsomorphicTools = require('webpack-isomorphic-tools');

global.__CLIENT__ = false;
global.__SERVER__ = true;
global.__DISABLE_SSR__ = false;   // Disable server side render here
global.__DEV__ = process.env.NODE_ENV !== 'production';

const dirRoot = require('path').join(process.cwd());

global.webpackIsomorphicTools = new WebpackIsomorphicTools(require('./tools/webpack/WIT.config'))
    .server(dirRoot, () => {
        if (__DEV__) { // eslint-disable-line
            require('./src/server');
        } else {
            require('./build/server'); // eslint-disable-line import/no-unresolved
        }
    });
