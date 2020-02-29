const express = require('express');
const { clientErr, serverErr } = require('./controller/index.controller');

const app = express();
const router = require('./routes/index.router');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(router);

app.use(clientErr);
app.use(serverErr);

module.exports = app;
