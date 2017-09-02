const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
//initialize socket.io
require('./socket')(io);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//route for static files and index.html (default path is '/')
app.use(express.static(path.resolve(__dirname, 'public')));

const webpack = require('webpack');
const webpackConfig = require('./webpack/webpack.dev.config');
const compiler = webpack(webpackConfig);

app.use(require("webpack-dev-middleware")(compiler, {
    publicPath: webpackConfig.output.publicPath,
    noInfo: true
}));

const port = process.env.PORT || 9999;
server.listen(port, () => {
    console.log('Server started http://localhost:' + port + '/');
});