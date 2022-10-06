const mongoose = require('mongoose')

const {Schema} = mongoose

const wordSchema = new Schema({
    Word : String,
    state : String,
    def : String,
    approve : String,
    user_id : Number
})

module.exports = mongoose.model('Word',wordSchema,'list')