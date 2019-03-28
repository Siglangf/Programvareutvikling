//Here we add all the functions for usershandling
const generateValueList = require("../helpfunctions").generateValuelist;
const express = require("express");
const router = express.Router();
const bodyparser = require("body-parser");
const sendQuery = require("../database");
let server = require("../../server"); //get pool-connection from server
const bodyparser = require("body-parser");
const generateValuelist = require("../helpfunctions").generateValuelist;

router.use(bodyparser.urlencoded({ extended: false }));
router.use(bodyparser.json());

router.use(bodyparser.urlencoded({ extended: false }));
router.use(bodyparser.json());

//sette inn i reports
router.post("/newReport", async (req, res) => {
  const reportedUserID = req.body.reportedUserID;
  const reportingUserID = req.body.reportingUserID;
  const productID = req.body.productID;
  const description = req.body.description;

  const valueList = [reportedUserID, reportingUserID, productID, description];
<<<<<<< HEAD
=======

  let sqlquery =
    "INSERT INTO reports (reportedUserID, reportingUserID, productID, description) VALUES ";
  sqlquery += generateValuelist(valueList);
  await sendQuery(server.pool, sqlquery);
>>>>>>> 2bbdfd16a552321aff87a7fb4e748436e7966e02

  let sqlquery =
    "INSERT INTO repots (reportedUserID, reportingUserID, productID, description) VALUES ";
  sqlquery += generateValueList(valueList);
  await sendQuery(server.pool, sqlquery);
  res.send("Report inserted where productID = " + productID);
});

//hente reports
<<<<<<< HEAD
router.get("/all", async (req, res) => {
  if (req.query.isAdmin) {
    const sqlquery = "SELECT * FROM reports ORDER BY reportedUserID ASC";
    const reports = await sendQuery(server.pool, sqlquery);
    res.send(reports);
  }
=======
router.get("/", async (req, res) => {
  const sqlquery =
    "SELECT \
  r.reportID,\
  CONCAT(reporting.firstName,' ', reporting.lastName) as reportingUser,\
  CONCAT(reported.firstName, ' ', reported.lastName) as reportedUser,\
  r.description,\
  product.title \
  FROM reports as r \
    INNER JOIN users as reporting ON r.reportingUserID=reporting.userID \
    INNER JOIN users as reported ON r.reportedUserID=reported.userID\
    INNER JOIN products as product on r.productID=product.productID;";
  const reports = await sendQuery(server.pool, sqlquery);
  for (i = 0; i < reports.length; i++) {
    reports[i] = JSON.parse(JSON.stringify(reports[i]));
  }
  res.send(reports);
>>>>>>> 2bbdfd16a552321aff87a7fb4e748436e7966e02
});

module.exports = router;
