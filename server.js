const express = require("express");
const mysql = require("mysql");
const users = require("./api/routes/users");
const auctions = require("./api/routes/auctions");
const app = express();
const port = process.env.PORT || 5000;
const users = ('/api/users');
const product = ('/api/product');
const orders = ('/api/orders');
const reports = ('/api/reports');

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

app.use('users', users);
app.use('product', product);
app.use('orders', orders);
app.use('reports', reports);
/*When an endpoint with /api/users/<something more> is called from react, 
the server sends the job to users.js in the api/routes/ folder*/
app.use("/api/users", users);
app.use("/api/auctions", auctions);
app.use("/api/orders", orders)
app.use("/api/reports", reports)

exports.pool = pool; //exports the connection so it can be required in the users.js module
