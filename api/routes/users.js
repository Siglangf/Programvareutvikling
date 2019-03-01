//Here we add all the functions for usershandling

const express = require("express");
const router = express.Router();
const sendQuery = require("../database");
const generateValuelist = require("../helpfunctions").generateValuelist;
let server = require("../../server"); //get pool-connection from server
const bodyparser = require("body-parser");

router.use(bodyparser.urlencoded({ extended: false }));
router.use(bodyparser.json());

//Gets all users from endpoint /api/users/all
router.get("/all", async (req, res) => {
  const users = await sendQuery(server.pool, "SELECT * FROM users");
  res.send(users);
});

//register new user, use endpoint /api/users/register
router.post("/register", async (req, res) => {
  console.log("hei");
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const phoneNumber = parseInt(req.body.phoneNumber);
  const email = req.body.email;
  const password = req.body.password;
  const rating = 0;
  const zipCode = parseInt(req.body.zipCode);
  const streetName = req.body.streetName;
  const isAdmin = 0;

  const userValueArray = [
    firstName,
    lastName,
    phoneNumber,
    email,
    password,
    rating,
    zipCode,
    streetName,
    isAdmin
  ];
  let sqlquery =
    "INSERT INTO users (firstName, lastName, phonenumber, email, zipcode, streetname, isAdmin, rating, password) VALUES ";
  sqlquery = sqlquery + generateValuelist(userValueArray);
  await sendQuery(server.pool, sqlquery);

  res.send("User inserted into table with unique email: " + email);
});

//oppdatere brukerinnstillinger
//dersom en brukerinnstilling ikke er endret, endres ikke variablen i front-end
router.post("/updateUserSettings", async (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const phoneNumber = req.body.phoneNumber;
  const email = req.body.email; //verifiser i front-end at email ikke allerede eksisterer
  const password = req.body.password;
  const zipCode = req.body.zipCode;
  const streetName = req.body.streetName;

  const sqlquery =
    "UPDATE user SET firstName = " +
    firstName +
    ", lastName = " +
    lastName +
    ", phoneNumber = " +
    phoneNumber +
    ", email = " +
    email +
    ", password = " +
    password +
    ", zipCode = " +
    zipCode +
    ", streetName = " +
    streetName;

  await sendQuery(server.pool, sqlquery);

  res.send("User updated where email = " + email);
});

//verifisere email
router.get("/returnEmail", async (req, res) => {
  const email = req.body.email;

  const sqlquery = "SELECT * FROM user WHERE email = " + email;

  const emailResult = await sendQuery(server.pool, sqlquery);

  res.send(emailResult);
});

//slette bruker fra systemet
router.post("/delete", async (req, res) => {
  const userID = req.body.userID;
  const sqlquery = "DELETE FROM user WHERE userID = " + userID;

  await sendQuery(server.pool, sqlquery);

  res.send("User deleted where userID = " + userID);
});

//bruker-login
//returnerer en string etter å sammenligne passord-input. Stringen er enten tom, eller == "ok"
//inneholder også userID som kan lagres i slik at andre funksjoner for å benytte databsen kan tas i bruk
router.get("/login", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  var returnString = "";

  const sqlquery = "SELECT password, userID FROM user WHERE email = " + email;

  const loginResult = await sendQuery(server.pool, sqlquery);

  if (password === loginResult[0]) {
    returnString = "ok";
  }

  res.send(returnString);
});

module.exports = router;
