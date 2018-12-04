const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const glob = require("glob");

module.exports = {
    entry: {
        index: './src/js/index.js',
        app: './src/js/app.js',
        particle:glob.sync('./src/js/particle/*.js'),
        stack: glob.sync("./src/components/stack/*.js")
    },
    output: {
        filename: 'js/[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new ExtractTextPlugin({
          filename: 'css/[name].css',
          allChunks: true
        }),
        new HtmlWebpackPlugin({
          filename: 'index.html',
          template: './src/index.html',
          chunks: ['index','particle']
        }),
        new HtmlWebpackPlugin({
            template: "./src/app.html",
            filename: "./stack.html",
            chunks: ['app','stack']
        }),
    ],
    module: {
        rules: [
         {
           test: /\.(scss|css)$/,
           use: ExtractTextPlugin.extract({
             fallback: 'style-loader',
             use: ['css-loader', 'sass-loader']
           })
         },
         {
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: {
              loader: 'babel-loader',
              options: {
                babelrc: false,
                presets: ['@babel/preset-env','@babel/preset-react']
              }
            }
         },
         {
           test: /\.(png|jpg|gif)$/,
           use: [
             {
               loader: 'file-loader',
               options: {
                 name:'media/[name].[ext]'
               }
             }
           ]
         }
        ]
    },
    watchOptions: {
        ignored: /node_modules/
    },
    mode: 'none'
};
