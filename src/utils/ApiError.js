const httpStatusCodes ={
    NOT_FOUND : 404,
    INTERNAL_SERVER: 500,
    BAD_REQUEST : 400

} 
class ApiError extends Error{
    constructor(description,statusCode,isOperational){
        super(description);
        Object.setPrototypeOf(this,new.target.prototype)

        this.statusCode = statusCode;
        this.isOperational = isOperational;
        Error.captureStackTrace(this)
    }
}
class Api400Error extends ApiError{
    constructor(description){
        super(description)
        this.statusCode = httpStatusCodes.BAD_REQUEST;
        this.isOperational = true;
    }
}
class Api404Error extends ApiError{
    constructor(description){
        super(description)
        this.statusCode = httpStatusCodes.NOT_FOUND;
        this.isOperational = true;
    }
}


module.exports = {ApiError,Api400Error,Api404Error}