const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function (prod) {

    return {
        entry: [
            'babel-polyfill', // for async-await support!
            path.resolve(__dirname, '../src/js')
        ],

        output: {
            path: path.resolve(__dirname, '../public'),
            filename: '[name].[chunkhash:10].js',
            publicPath: '/'
        },

        module: {
            rules: [{
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    cacheDirectory: true
                },
                include: path.resolve(__dirname, '../src/js')
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: !prod
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: !prod
                            }
                        }
                    ]
                }),
                include: path.resolve(__dirname, '../src/scss')
            },
            { test: /\.hbs$/, loader: 'handlebars-loader' }
            ]
        },

        resolve: {
            extensions: ['.js', '.jsx']
        },

        plugins: [
            new webpack.optimize.OccurrenceOrderPlugin(),

            new CleanWebpackPlugin('*.*', {
                root: path.join(__dirname, '../public'),
            }),

            new ExtractTextPlugin({
                filename: '[name].[contenthash:10].css'
            }),

            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify(prod ? 'production' : 'development')
            }),

            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, '../views/index.hbs')
              })
        ]
    }
};