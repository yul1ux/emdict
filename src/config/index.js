const dotenv = require('dotenv');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const env = dotenv.config();

if (env.error) {
  throw new Error('dotenv file not found');
}

module.exports = {
  PORT: process.env.PORT,

  DB:process.env.MONGODB_DURI,
  REDIS : process.env.REDIS_DURI,
  api: {
    prefix: '/api',
  },

  loglevel: process.env.LOG_LEVEL,
};
