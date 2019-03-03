const config = require("config");
const express = require("express");
const mysql = require("mysql");
const users = require("./api/routes/users");
const products = require("./api/routes/products");
const orders = require("./api/routes/orders");
const reports = require("./api/routes/reports");
const auth = require("./api/routes/auth");
const app = express();

if (!config.get("jwtPrivateKey")) {
  console.error("FATAL ERROR: jwtPrivateKey is not defined");
  process.exit(1);
}

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

/*When an endpoint with /api/users/<something more> is called from react, 
the server sends the job to users.js in the api/routes/ folder*/
app.use("/api/users", users);
app.use("/api/products", products);
app.use("/api/orders", orders);
app.use("/api/reports", reports);
app.use("/api/auth", auth);

exports.pool = pool; //exports the connection so it can be required in the users.js module
