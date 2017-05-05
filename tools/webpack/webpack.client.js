'use strict'; // eslint-disable-line

const path = require('path');
const webpack = require('webpack');
const precss = require('precss');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const { CSSModules, eslint, stylelint, vendor } = require('./config');


const nodeEnv = process.env.NODE_ENV || 'development';
const isDev = nodeEnv !== 'production';

const WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin');
const webpackIsomorphicToolsPlugin = new WebpackIsomorphicToolsPlugin(require('./WIT.config')).development(isDev); // eslint-disable-line

const getPlugins = () => {
    const plugins = [
        new ExtractTextPlugin({
            filename: '[name].[contenthash:8].css',
            allChunks: true,
            disable: isDev,
            ignoreOrder: CSSModules
        }),
        new webpack.LoaderOptionsPlugin({
            options: {
                eslint: { failOnError: eslint },
                context: '/',
                debug: isDev,
                minimize: !isDev
            }
        }),
        new StyleLintPlugin({ syntax: 'scss', failOnError: stylelint }),
        new webpack.EnvironmentPlugin({ NODE_ENV: JSON.stringify(nodeEnv) }),
        new webpack.DefinePlugin({
            __CLIENT__: true,
            __SERVER__: false,
            __DEV__: isDev
        }),
        new webpack.NoEmitOnErrorsPlugin(),
        webpackIsomorphicToolsPlugin
    ];

    if (isDev) {
        plugins.push(
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NamedModulesPlugin(),
            new webpack.IgnorePlugin(/webpack-stats\.json$/)
        );
    } else {
        plugins.push(
            new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', minChunks: Infinity }),
            new webpack.HashedModuleIdsPlugin(),
            new webpack.optimize.UglifyJsPlugin({
                sourceMap: true,
                beautify: false,
                mangle: { screw_ie8: true },
                compress: {
                    screw_ie8: true,
                    warnings: false,
                    unused: true,
                    dead_code: true
                },
                output: { screw_ie8: true, comments: false }
            })
        );
    }

    return plugins;
};

const getEntry = () => {
    let entry = [
        'react-hot-loader/patch',
        'webpack-hot-middleware/client?reload=true',
        './src/client.js'
    ];

    if (!isDev) {
        entry = {
            main: './src/client.js',
            vendor
        };
    }

    return entry;
};

module.exports = {
    name: 'client',
    target: 'web',
    cache: isDev,
    devtool: isDev ? 'cheap-module-eval-source-map' : 'hidden-source-map',
    context: path.join(process.cwd()),
    entry: getEntry(),
    output: {
        path: path.join(process.cwd(), './build/public/assets'),
        publicPath: '/assets/',
        filename: isDev ? '[name].js' : '[name].[chunkhash:8].js',
        chunkFilename: isDev ? '[name].chunk.js' : '[name].[chunkhash:8].chunk.js',
        pathinfo: isDev
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                enforce: 'pre',
                exclude: /node_modules/,
                loader: 'eslint'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                options: {
                    cacheDirectory: isDev,
                    babelrc: false,
                    presets: [['es2015', { modules: false }], 'react', 'stage-0'],
                    plugins: ['transform-runtime', 'react-hot-loader/babel', 'lodash']
                }
            },
            {
                test: /\.(scss|sass)$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style',
                    use: [
                        {
                            loader: 'css',
                            options: {
                                importLoaders: 2,
                                sourceMap: true,
                                modules: CSSModules,
                                context: path.join(process.cwd(), './src'),
                                localIdentName: isDev ? '[name]__[local].[hash:base64:5]' : '[hash:base64:5]',
                                minimize: !isDev
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: () => ([
                                    precss,
                                    autoprefixer({ browsers: ['last 10 versions'] })
                                ])
                            }
                        },
                        {
                            loader: 'sass',
                            options: {
                                outputStyle: 'expanded',
                                sourceMap: true,
                                sourceMapContents: !isDev
                            }
                        }
                    ]
                })
            },
            {
                test: /\.(woff2?|ttf|eot|svg)$/,
                loader: 'url',
                options: { limit: 10000 }
            },
            {
                test: webpackIsomorphicToolsPlugin.regular_expression('images'),
                use: [
                    {
                        loader: 'url',
                        options: { limit: 10240 }
                    },
                    {
                        loader: 'image-webpack',
                        options: { bypassOnDebug: true }
                    }
                ]
            }
        ]
    },
    plugins: getPlugins(),
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
        fs: 'empty',
        vm: 'empty',
        net: 'empty',
        tls: 'empty'
    }
};
