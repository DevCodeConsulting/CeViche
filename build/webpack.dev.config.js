var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var utils_paths = require('./utilis_path');
var _debug = require('debug');

var debug = _debug('app:webpack:config');

debug('Create webpack configuration.');

var defineVars = {
    'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
    },
    '__BASENAME__': JSON.stringify('')
};

// for (var prop in propperties) {
//     defineVars[prop] = JSON.stringify(propperties[prop]);
// }

module.exports = {
    name: 'client',
    target: 'web',
    devtool: 'inline-source-map',
    resolve: {
        root: utils_paths.source(),
        extensions: ['', '.js', '.jsx', '.json'],
        alias: {
            'react': path.resolve('./node_modules/react'),
            'react-dom': path.resolve('./node_modules/react-dom'),
        }
    },
    entry: {
        app: [utils_paths.source('main.js'), 'webpack-hot-middleware/client'],
        vendor: [
            'history',
            'react',
            'react-redux',
            'react-router',
            'react-router-redux',
            'redux',
            "axios",
            "react-tap-event-plugin",
            "redux-thunk",
            "react-dom",
            "immutable",
            "react-pure-render"
        ]
    },
    output: {
        filename: '[name].[hash].js',
        path: utils_paths.dist(),
        publicPath: "/"
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "babel",
                query: {
                    cacheDirectory: true,
                    plugins: ["transform-runtime"],
                    presets: ["es2015", "react", "stage-2"],
                    env: {
                        development: {
                            plugins: [
                                ["react-transform", {
                                    transforms: [{
                                        transform: "react-transform-hmr",
                                        imports: ["react"],
                                        locals: ["module"]
                                    }, {
                                        transform: "react-transform-catch-errors",
                                        imports: ["react", "redbox-react"]
                                    }]
                                }]
                            ]
                        },
                        production: {
                            plugins: [
                                "transform-react-constant-elements",
                                "transform-react-inline-elements",
                                "transform-react-remove-prop-types",
                                "transform-react-pure-class-to-function"
                            ]
                        }
                    }
                }
            },
            {
                test: /\.json$/,
                loader: 'json'
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract('style', 'css?sourceMap&-minimize!postcss!sass?sourceMap')
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract('style', 'css?sourceMap&-minimize!postcss')
            },
            {
                test: /\.woff(\?.*)?$/,
                loader: 'url?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/font-woff'
            },
            {
                test: /\.woff2(\?.*)?$/,
                loader: 'url?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/font-woff2'
            },
            {
                test: /\.otf(\?.*)?$/,
                loader: 'file?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=font/opentype'
            },
            {
                test: /\.ttf(\?.*)?$/,
                loader: 'url?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/octet-stream'
            },
            {
                test: /\.eot(\?.*)?$/, loader: 'file?prefix=fonts/&name=[path][name].[ext]'
            },
            {
                test: /\.svg(\?.*)?$/,
                loader: 'url?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=image/svg+xml'
            },
            {
                test: /\.(png|jpg)$/, loader: 'url?limit=8192'
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin(defineVars),
        new HtmlWebpackPlugin({
            template: utils_paths.source('index.html'),
            hash: false,
            filename: 'index.html',
            inject: 'body',
            minify: {
                collapseWhitespace: true
            }
        }),
        new ExtractTextPlugin('[name].[contenthash].css', {
            allChunks: true
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor']
        })
    ],
    sassLoader: {
        includePaths: [utils_paths.source()]
    },
    stats: {
        children: false
    }
};
