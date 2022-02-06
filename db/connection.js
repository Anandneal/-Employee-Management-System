const mysql = require("mysql2");

// Connect to database
const connection = mysql.createConnection(
  {
    host: "localhost",
    // MySQL username,
    user: "root",
    // TODO: Add MySQL password here
    password: "Seitaro3490!",
    database: "employees",
  },
  console.log(`Connected to the employees database.`)
);

connection.connect(function (err) {
  if (err) throw err;
});

// Default response for any other request (Not Found)

module.exports = connection;
