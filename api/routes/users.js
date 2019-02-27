//Here we add all the functions for usershandling

const express = require("express");
const router = express.Router();
const sendQuery = require("../database");
let server = require("../../server"); //get pool-connection from server

//Gets all users from endpoint /api/users/all
router.get("/all", async (req, res) => {
  const users = await sendQuery(server.pool, "SELECT * FROM users");
  res.send({ express: users });
});

module.exports = router;
