const {getDefDb} = require('../models/index.js')

const getDefService = async(word) =>{
    try{
        return await getDefDb(word)
    }catch(e){
        throw new Error(e.message)
    }
}

module.exports = {getDefService};