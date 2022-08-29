const httpStatusCodes ={
    NOT_FOUND : 404,
    OK : 200,
    INTERNAL_SERVER: 500,
    BAD_REQUEST : 400

}
class BaseError extends Error{
    constructor(name,description,isOperational,statusCode){
        super(description);
        Object.setPrototypeOf(this,new.target.prototype)

        this.name = name;
        this.statusCode = statusCode;
        this.isOperational = isOperational;
        Error.captureStackTrace(this)

    }
}

class Api400Error extends BaseError{
    constructor(
        name,
        statusCode = httpStatusCodes.BAD_REQUEST,
        description = 'Bad Request',
        isOperational = true
    ){
        super(description,name,isOperational,statusCode)
    }
}
class Api404Error extends BaseError{
    constructor(
        name,
        statusCode = httpStatusCodes.NOT_FOUND,
        description = 'Not Found',
        isOperational = true
    ){
        super(description,name,isOperational,statusCode)
    }   
}

module.exports = {BaseError , Api400Error,Api404Error}