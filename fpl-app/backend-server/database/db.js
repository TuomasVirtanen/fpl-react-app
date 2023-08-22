const mysql = require("mysql");
require("dotenv").config();

const connection = mysql.createPool({
  connectionLimit: 150,
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  port: 3306,
});

// Event listener for when a connection is acquired
connection.on("acquire", (connection) => {
  console.log("Connection %d acquired", connection.threadId);
});

// Event listener for when a connection is released
connection.on("release", (connection) => {
  console.log("Connection %d released", connection.threadId);
});

module.exports = connection;
