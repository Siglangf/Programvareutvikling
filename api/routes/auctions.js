const express = require("express");
const router = express.Router();
const sendQuery = require("../database");
let server = require("../../server");

router.get("/all", async(req, res) => {
  const auctions = await sendQuery(server.pool, "SELECT * FROM products");
  res.send(auctions);
})

module.exports = router;