const dotenv = require('dotenv');


process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const env = dotenv.config();

if(env.error){
    throw new Error('dotenv file not found')
}

module.exports = {
    
    PORT: process.env.PORT,

    DB:{
        host : process.env.DB_HOST,
        user : process.env.DB_USER,
        password : process.env.DB_PASSWORD,
        database : process.env.DB_NAME
    },

    api: {
        prefix: '/api'
    },

    loglevel : process.env.LOG_LEVEL
}