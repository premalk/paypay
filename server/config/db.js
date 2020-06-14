var mysql = require('mysql');
const dbConfig = require('./db.config');

const connection = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
});

connection.connect((error)=>{
  if (error) throw error;
  console.log('Successfully Connected to Database.');
});
module.exports = connection;
