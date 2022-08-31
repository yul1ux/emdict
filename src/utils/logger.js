const config = require('../config');
const winston = require('winston');

const logger = winston.createLogger({
  levels: winston.config.npm.levels,
  level: config.loglevel,
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(winston.format.cli(), winston.format.splat()),
    }),
  ],
});

module.exports = logger;
