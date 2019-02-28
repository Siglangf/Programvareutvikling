//Here we add all the functions for usershandling

const express = require("express");
const router = express.Router();
const sendQuery = require("../database");
let server = require("../../server"); //get pool-connection from server

//Gets all users from endpoint /api/users/all
router.get("/all", async (req, res) => {
  const users = await sendQuery(server.pool, "SELECT * FROM users");
  res.send(users);
});

//registrere bruker
router.post('/register', async (req, res) => {
  const firstName = req.body.state.firstName;
  const lastName = req.body.state.lastName;
  const phoneNumber = req.body.state.phoneNumber;
  const email = req.body.state.email;
  const password = req.body.state.password;
  const rating = 0;
  const zipCode = req.body.state.zipCode;
  const streetName = req.body.state.streetName;
  const isAdmin = 0;

  const userValueArray = [firstName, lastName, phoneNumber, email, password, rating, zipCode, streetName, isAdmin]
  const sqlquery = ("INSERT INTO user (firstName, lastName, phonenumber, email, zipcode, streetname, isAdmin, rating, password) VALUES ?")

  await sendQuery(server.pool, sqlquery, userValueArray);

  res.send("User inserted into table with unique email: " + email)
});

//oppdatere brukerinnstillinger
//dersom en brukerinnstilling ikke er endret, endres ikke variablen i front-end
router.post('/updateUserSettings', async (req, res) => {
  const firstName = req.body.state.firstName;
  const lastName = req.body.state.lastName;
  const phoneNumber = req.body.state.phoneNumber;
  const email = req.body.state.email; //verifiser i front-end at email ikke allerede eksisterer
  const password = req.body.state.password;
  const zipCode = req.body.state.zipCode;
  const streetName = req.body.state.streetName;

  const sqlquery = ("UPDATE user SET firstName = " + firstName + ", lastName = " + lastName + ", phoneNumber = " + phoneNumber + ", email = " + email + ", password = " + password + ", zipCode = " + zipCode + ", streetName = " + streetName);

  await sendQuery(server.pool, sqlquery);

  res.send("User updated where email = " + email);
});

//verifisere email
router.get('/returnEmail', async (req, res) =>{
  const email = req.body.state.email;
  
  const sqlquery = ("SELECT * FROM user WHERE email = " + email);

  const emailResult = await sendQuery(server.pool, sqlquery);

  res.send(emailResult);
});

//slette bruker fra systemet
router.post('/delete', async (req, res) => {
  const userID = req.body.state.userID;
  const sqlquery = "DELETE FROM user WHERE userID = " + userID;

  await sendQuery(server.pool, sqlquery);

  res.send("User deleted where userID = " + userID)
});

//bruker-login
//returnerer en string etter å sammenligne passord-input. Stringen er enten tom, eller == "ok"
//inneholder også userID som kan lagres i state slik at andre funksjoner for å benytte databsen kan tas i bruk
router.get('/login', async (req, res) => {
  const email = req.body.state.email;
  const password = req.body.state.password;
  
  var returnString = "";

  const sqlquery = ("SELECT password, userID FROM user WHERE email = " + email)

  const loginResult = await sendQuery(server.pool, sqlquery);

  if (password === loginResult[0]) {
    returnString = "ok";
  }

  res.send(returnString);
});


module.exports = router;
