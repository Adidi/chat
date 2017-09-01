const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const  CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = function (prod) {

    return {
        entry: [
            'babel-polyfill', // for async-await support!
            path.resolve(__dirname, '../src/js')
        ],

        output: {
            path: path.resolve(__dirname, '../public/dist'),
            filename: 'chat.js'
        },

        module: {
            rules: [{
                test: /\.js$/,
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
            }
            ]
        },

        resolve: {
            extensions: ['.js']
        },

        plugins: [
            new CleanWebpackPlugin('dist/*.*', {
                root: path.join(__dirname, '../public'),
            }),

            new ExtractTextPlugin({
                filename: 'chat.css'
            }),

            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify(prod ? 'production' : 'development')
            })
        ]
    }
};