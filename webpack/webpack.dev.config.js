const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.config');

module.exports = webpackMerge(commonConfig(false), {
    cache: true,
    devtool: 'source-map'
});