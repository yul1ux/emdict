const mongoose = require('mongoose')
const config = require('../config');

const dbConnection =  async () => {
    const connection = await mongoose.connect(config.DB,{useNewUrlParser :true,useUnifiedTopology:true})
    
    return connection.db;
   
}


module.exports = dbConnection;