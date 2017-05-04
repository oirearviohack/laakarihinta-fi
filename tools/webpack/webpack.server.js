'use strict'; // eslint-disable-line

const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const { CSSModules, eslint } = require('./config');

module.exports = {
    name: 'server',
    target: 'node',
    externals: [nodeExternals({
        whitelist: [/\.(?!(?:js?|json)$).{1,5}$/i]
    })],
    devtool: 'hidden-source-map',
    context: path.join(process.cwd()),
    entry: { server: ['./src/server.js'] },
    output: {
        path: path.join(process.cwd(), './build'),
        filename: '[name].js',
        publicPath: '/assets/',
        chunkFilename: '[name].[chunkhash:8].chunk.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                enforce: 'pre',
                exclude: /node_modules/,
                loader: 'eslint'
            },
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel',
                options: {
                    babelrc: false,
                    presets: [['es2015', { modules: false }], 'react', 'stage-0'],
                    plugins: ['transform-runtime', 'babel-plugin-lodash']
                }
            },
            {
                test: /\.(css|scss|sass)$/,
                use: [
                    {
                        loader: 'css/locals',
                        options: {
                            modules: CSSModules,
                            context: path.join(process.cwd(), './src'),
                            localIdentName: '[hash:base64:5]'
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff2?|ttf|eot)$/,
                loader: 'url',
                options: { limit: 10000 }
            }
        ]
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            options: {
                eslint: { failOnError: eslint }
            }
        }),
        new webpack.optimize.LimitChunkCountPlugin({ maxChunks: 1 })
    ],
    resolveLoader: {
        modules: ['src', 'node_modules'],
        moduleExtensions: ['-loader']
    },
    resolve: {
        modules: ['src', 'node_modules'],
        descriptionFiles: ['package.json'],
        moduleExtensions: ['-loader'],
        extensions: ['.js', '.json']
    },
    node: {
        console: false,
        global: false,
        process: false,
        Buffer: false,
        __filename: true,
        __dirname: true
    }
};
