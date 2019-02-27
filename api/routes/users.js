const express = require("express");
const mysql = require("mysql");
const router = express.Router();
const sendQuery = require("../database");
let server = require("../../server");

async function test() {
  const users = await sendQuery(server.pool, "SELECT * FROM users");
  console.log(users);
}

router.get("/all", async (req, res) => {
  const users = await sendQuery(server.pool, "SELECT * FROM users");
  console.log(users);
  res.send({ express: users });
});

module.exports = router;
