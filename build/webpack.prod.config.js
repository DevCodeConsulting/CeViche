var webpack = require('webpack');
var OnBuildWebPack = require('on-build-webpack');
var webpackConfig = require('./webpack.dev.config.js');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var utils_paths = require('./utilis_path');
var fs = require('fs-extra');
var propperties = require('../properties.json');

var contextPath = "/ceviche/";

var defineVars = {
    'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
    },
    '__BASENAME__': JSON.stringify(contextPath)
};

for (var prop in propperties) {
    defineVars[prop] = JSON.stringify(propperties[prop]);
}

webpackConfig.devtool = 'eval';
webpackConfig.entry.app = webpackConfig.entry.app[0];
webpackConfig.output.publicPath = contextPath + "/";
webpackConfig.plugins = [
    new webpack.DefinePlugin(defineVars),
    new ExtractTextPlugin('[name].[contenthash].css', {
        allChunks: true
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
        output: {
            comments: true
        },

        sourceMap: false,

        compress: {
            unused: true,
            dead_code: true,
            warnings: false,
            drop_console: true
        }
    }),
    new webpack.optimize.CommonsChunkPlugin({
        names: ['vendor']
    }),
    new HtmlWebpackPlugin({
        template: utils_paths.source('index.html'),
        hash: false,
        filename: 'index.html',
        inject: 'body',
        minify: {
            collapseWhitespace: true
        }
    }),
    new OnBuildWebPack(function () {
        fs.copySync(utils_paths.static(), utils_paths.dist());
    })
];

module.exports = webpackConfig;
