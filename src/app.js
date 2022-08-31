const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const { returnError } = require('./utils/errorHandler');
const config = require('./config');
const logger = require('./utils/logger');
const routes = require('./api/routes');

const app = express();

app.get('/status', (req, res) => {
  res.sendStatus(200);
});
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

app.use(cors());

app.use(config.api.prefix, routes);

app.use(express.json());

app.use(returnError);

app.listen(config.PORT, function () {
  logger.info(`App is listening on port:${config.PORT}`);
});
