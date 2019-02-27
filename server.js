const express = require("express");
const mysql = require("mysql");
const users = require("./api/routes/users");
const app = express();
const sendQuery = require("./api/database");
const port = process.env.PORT || 5000;

let pool = mysql.createPool({
  connectionLimit: 10,
  host: "mysql.stud.ntnu.no",
  user: "sigursl_",
  password: "pugruppe69",
  database: "harkamas_pu69"
}); //Creates logginsettup for mysql_database

pool.getConnection((err, connection) => {
  if (err) {
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      console.error("Database connection was closed.");
    }
    if (err.code === "ER_CON_COUNT_ERROR") {
      console.error("Database has too many connections.");
    }
    if (err.code === "ECONNREFUSED") {
      console.error("Database connection was refused.");
    }
  }
  if (connection) connection.release();
  return;
}); //Creates connection to mysql_database

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get("/express_backend", (req, res) => {
  res.send({ express: "YOUR EXPRESS BACKEND IS CONNECTED TO REACT" });
});

app.use("/api/users", users);

async function test() {
  console.log(await sendQuery(pool, "SELECT * FROM users"));
}
//test();

exports.pool = pool;
