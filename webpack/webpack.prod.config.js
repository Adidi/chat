const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const commonConfig = require('./webpack.common.config');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = webpackMerge(commonConfig(true), {
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            mangle: {
                screw_ie8: true
            },
            compress: {
                screw_ie8: true,
                warnings: false
            },
            sourceMap: false,
            comments: false
        }),

        new OptimizeCssAssetsPlugin({
            cssProcessorOptions: {
                safe: true
            }
        }),

        new ProgressBarPlugin()
    ]
});