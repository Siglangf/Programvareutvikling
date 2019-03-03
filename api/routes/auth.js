const express = require("express");
const config = require("config");
const jwt = require("jsonwebtoken");
const router = express.Router();
const sendQuery = require("../database");
const generateValuelist = require("../helpfunctions").generateValuelist;
let server = require("../../server"); //get pool-connection from server
const bodyparser = require("body-parser");

router.use(bodyparser.urlencoded({ extended: false }));
router.use(bodyparser.json());

//authenticate users when logging in
router.post("/", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  console.log(email);

  let sqlquery =
    'SELECT email,password FROM users WHERE email="' + email + '";';
  console.log(sqlquery);
  let response = await sendQuery(server.pool, sqlquery);
  console.log(response);
  if (response.length === 0) {
    return res.status(400).send("Invalid email ");
  }
  if (response[0].password != password) {
    return res.status(400).send("Invalid passord");
  }

  sqlquery = 'SELECT * FROM users WHERE email="' + email + '";';
  let user = await sendQuery(server.pool, sqlquery);
  user = JSON.parse(JSON.stringify(user[0]));
  const token = jwt.sign(user, config.get("jwtPrivateKey"));
  res.send(token);
});

module.exports = router;
