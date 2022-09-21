const {MongoClient} = require('mongodb')
const config = require('../config');
const logger = require('./logger');

const connectin = async () => {
    try {
        const mongoClient = new MongoClient(config.DB)
        await mongoClient.connect()

        return mongoClient;
    } catch (error) {
        logger.error('Connection to mongodb failed!',error)
        process.exit();
    }
}

module.exports = connectin;