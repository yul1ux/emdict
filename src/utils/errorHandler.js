const ApiError = require('./ApiError');

// eslint-disable-next-line no-unused-vars
const returnError = (err, req, res, next) => {
  
  err.statusCode = err.statusCode || 500;
  res.status(err.statusCode).json({error : err.message});
};

const isOperationalError = error => {
  if (error instanceof ApiError) {
    return error.isOperational;
  }
  return false;
};

module.exports = {
  returnError,
  isOperationalError,
};
