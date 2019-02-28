//Here we add all the functions for usershandling

const express = require("express");
const router = express.Router();
const sendQuery = require("../database");
let server = require("../../server"); //get pool-connection from server

//sette inn i reports
router.post('/insertReport', async (req, res) => {
  const reportedUserID = req.body.state.reportedUserID;
  const reportingUserID = req.body.state.userID;
  const productID = req.body.state.productID;
  const description = req.body.state.description;


  const userValueArray = [reportedUserID, reportingUserID, productID, description];

  const sqlquery = ("INSERT INTO reports (reportedUserID, reportingUserID, productID, description) VALUES ?");

  await sendQuery(server.pool, sqlquery, userValueArray);

  res.send("Report inserted where productID = " + productID);
});

//hente reports
router.get('/reports', async (req, res) =>{
  
  const sqlquery = ("SELECT * FROM reports ORDER BY reportedUserID ASC");
  
  const reports = await sendQuery(server.pool, sqlquery);

  res.send(reports);
});

module.exports = router;
