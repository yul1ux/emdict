const mysql2 = require('mysql2/promise');
const config = require('../config');

const getDefDb = async word => {
  const connection = await mysql2.createConnection(config.DB);
  const [rows] = await connection.execute('SELECT state,def FROM `dblist` WHERE `Word` = ?', [word]);
  return rows;
};

module.exports = { getDefDb };
