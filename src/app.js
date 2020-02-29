const express = require('express');

const app = express();
const router = require('./routes/index.router');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(router);

module.exports = app;
