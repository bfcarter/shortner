const express = require('express');
const bodyParser = require('body-parser');
const mainRouter = require('./routers/');
const logger = require('./middlewares/logger.js');
const bannedIpsMiddleware = require('./middlewares/bannedIps.js');

const app = express();

app.enable('trust proxy');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(logger);
app.use(bannedIpsMiddleware);

app.use(mainRouter);

module.exports = app;
