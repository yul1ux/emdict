const winston = require('winston')


const logger = winston.createLogger({
    levels : winston.config.npm.levels,
    transports: [
        new winston.transports.Console({
            format: winston.format.combine(
              winston.format.cli(),
              winston.format.splat(),
            )
          })
    ]
})

module.exports = logger;