const { logError } = require('../../utils/errorHandler');
const {getDefService} = require('../../services/index.js');
const { Api400Error } = require('../../utils/ApiError.js');

const getDef = async(req, res) =>{
    const word = req.query.w;
    if(word[0] === undefined){
        throw new Api400Error('Please fill a word')
    }
    try{
        res.json(await getDefService(word));
    }catch(e){
        throw new Error(e)
    }
}

module.exports = {getDef};