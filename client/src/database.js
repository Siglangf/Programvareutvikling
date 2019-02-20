const mysql = require("mysql");
const util = require("util");

async function sendQuery(qry) {
  /*This function is an asyncronous function because of the delayed query function used within. 
  
  INPUT: The MySQL query to be sendt to the database
  
  OUTPUT: A Promise-object with the data recieved from the database as a list of objects: 
  [{obj1_attribute1: value, obj:2attribute2: value}, {obj2_attribute1,obj2_attribute2}, etc...]
  
  If there is an error, the error is thrown.

  When using the Promise-object returned it is important to use it with async-await function syntax*/

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

  pool.query = util.promisify(pool.query); //Converts query function so that it returns a promise-object

  try {
    const data = await pool.query(qry);
    pool.end(); //ends connection
    return data;
  } catch (err) {
    throw err;
  }
}
/*
//EXAMPLE OF USE:
async function test() {
  output = await sendQuery("SELECT * FROM users");
  console.log(output); //The output value will be available inside the function
}
test();
*/
module.exports = sendQuery;
