const { createClient } = require("redis")
const Word = require("../models")
const config = require('../config')

const getDefService = async word => {
  const client = createClient({ url: config.REDIS })
  client.on("error", err => console.log("Redis Client Error", err))
  client.connect()

  const cacheValue = await client.get(word)
  if (cacheValue != null) {
    console.log("return from cache")
    return JSON.parse(cacheValue)
  }
  const result = await Word.find({ Word: word }).select({
    state: 1,
    def: 1,
    _id: 0
  })
  if(result[0] != undefined){
   await client.set(word, JSON.stringify(result))
  }
  return result
}

module.exports = { getDefService }
