const express = require("express");
const { connect } = require("http2");
// Import and require mysql2
const mysql = require("mysql2");

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
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

db.query("SELECT * FROM movies", function (err, results) {
  console.table(results);
});
// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = connection;
