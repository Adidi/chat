const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//route for static files and index.html (default path is '/')
app.use(express.static(path.resolve(__dirname, 'public')));


const port = process.env.PORT || 9999;
app.listen(port, () => {
    console.log('Server started http://localhost:' + port + '/');
});