const mongoose = require("mongoose")
const config = require("../config")

const dbConnection = async () => {
  try {
    const connection = await mongoose.connect(config.DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })

    return connection.db
  } catch (err) {
    throw new Error(err)
  }
}

module.exports = dbConnection
