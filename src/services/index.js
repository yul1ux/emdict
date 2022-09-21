const connection = require('../utils/mongodb')
const getDefService = async word => {
  try {
    const mongoClient = await connection()
    const db = mongoClient.db('emdict');
    const collection = db.collection('db');
    const query = { Word: word };
    const options = { projection: { state: 1, def: 1 } };
    const result = collection.find(query, options);

    return result.toArray();
  } catch (e) {
    throw new Error(e.message);
  }
};

module.exports = { getDefService };
