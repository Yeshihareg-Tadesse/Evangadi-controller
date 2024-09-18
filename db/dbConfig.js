// Import the mysql2 library into your Node.js to interact with your database.
const mysql2 = require("mysql2");

// Create a multiple connection to the database
const dbConnection = mysql2.createPool({
  user: process.env.USER,
  database: process.env.DATABASE,
  host: "localhost", //address of the database server
  password: process.env.PASSWORD,
  connectionLimit: 10, // The maximum number of connections that the pool can create
});

// Export the connection pool
module.exports = dbConnection.promise();






// require('dotenv').config(); // Load environment variables from .env file

// const mysql2 = require('mysql2');

// const dbConnection = mysql2.createPool({
//   user: process.env.USER,
//   database: process.env.DATABASE,
//   host: process.env.HOST, // Ensure you have this in your .env file
//   password: process.env.PASSWORD,
//   waitForConnections: true,
//   connectionLimit: 10,
//   queueLimit: 0,
//   connectTimeout: 10000 
// });









// module.exports = dbConnection.promise();

// // Import the mysql2 library into your Node.js to interact with your database.
//  const mysql2 = require("mysql2");

// // Create a multiple connection to the database
// const dbConnection = mysql2.createPool({
//   user: 'yeshihzs_forum',
//   database:'yeshihzs_evangadi-forum',
//   host: "196.189.160.136", //address of the database server
//   password:'nS9ukh5HsMh4',
//   waitForConnections:true,
//   connectionLimit: 10, // The maximum number of connections that the pool can create
//   queueLimit:0
// });

// // Export the connection pool
// module.exports = dbConnection.promise();








// // Import the mysql2 library into your Node.js to interact with your database.
// const mysql2 = require("mysql2");

// // Create a multiple connection to the database
// const dbConnection = mysql2.createPool({
//   user: process.env.USER,
//   database: process.env.DATABASE,
//   host: "localhost", //address of the database server
//   password: process.env.PASSWORD,
//   connectionLimit: 10, // The maximum number of connections that the pool can create
// });

// // Export the connection pool
// module.exports = dbConnection.promise();
