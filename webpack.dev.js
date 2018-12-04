const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const Visualizer = require('webpack-visualizer-plugin');
//const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = merge(common, {
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        hot: true
    },
    mode: 'development',
    plugins: [
        new Visualizer({
            filename: './statistics.html'
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new BrowserSyncPlugin({
           // browse to http://localhost:3000/ during development,
           // ./public directory is being served
           host: 'localhost',
           port: 3000,
           // proxy the Webpack Dev Server endpoint
           // (which should be serving on http://localhost:3100/)
           // through BrowserSync
           proxy: 'http://localhost:8080/'
        })
    ],
    watch: true
});
