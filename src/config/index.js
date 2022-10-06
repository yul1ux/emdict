/* eslint-disable no-unused-vars */
const dotenv = require('dotenv');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const env = dotenv.config();

if (env.error) {
  throw new Error('dotenv file not found');
}
let dbUrl= process.env.MONGODB_URL
let redisUrl = process.env.REDIS_URL
if(process.env.NODE_ENV == 'development'){
  dbUrl = process.env.MONGODB_DURL
  redisUrl = process.env.REDIS_DURL
}
module.exports = {
  PORT: process.env.PORT,

  DB:process.env.dbUrl,
  REDIS : process.env.redisUrl,
  api: {
    prefix: '/api',
  },

  loglevel: process.env.LOG_LEVEL,
};
