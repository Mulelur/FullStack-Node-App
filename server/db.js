const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'tondi',
  password: 'Rotondwa3+',
  // password: '',
  database: 'node1db',
});

db.connect();

module.exports = db;
