//Here we add all the functions for usershandling

const express = require("express");
const router = express.Router();
const sendQuery = require("../database");
let server = require("../../server"); //get pool-connection from server
const generateValuelist = require("../helpfunctions").generateValuelist;
const bodyparser = require("body-parser");

router.use(bodyparser.urlencoded({ extended: false }));
router.use(bodyparser.json());

//setter inn orders
router.post("/insertOrder", async (req, res) => {
  const buyerID = req.body.highestBidderID;
  const sellerID = req.body.sellerID;
  const productID = req.body.productID;
  const ratedByBuyer = 0;
  const ratedBySeller = 0;

  const userValueArray = [
    buyerID,
    sellerID,
    productID,
    ratedByBuyer,
    ratedBySeller
  ];

  let sqlquery =
    "INSERT INTO orders (buyerID, sellerID, productID, ratedByBuyer, ratedBySeller) VALUES ";
  sqlquery = sqlquery + generateValuelist(userValueArray);
  await sendQuery(server.pool, sqlquery, userValueArray);

  res.send("Order inserted where productID = " + productID);
  res.send("Inserted");
});

//oppdatere bruker-rating, kan forsåvidt ligge i users.js også
router.post("/updateRating", async (req, res) => {
  const ratingUserID = req.body.state.userID; //Hentes fra login
  const orderID = req.body.state.orderID; //Følgende tre verdier hentes fra et returnert order-objekt(brukeren har liste)
  const buyerID = req.body.state.buyerID;
  const sellerID = req.body.state.sellerID;
  const ratingValue = req.body.state.ratingValue; //+1 eller -1

  var ratingUserType = "";
  var ratedUserType = "";
  var ratedUserID = 0;

  if (ratingUserID === buyerID) {
    ratingUserType = "Buyer";
    ratedUserType = "Seller";
    ratedUserID = sellerID;
  } else {
    ratingUserType = "Seller";
    ratedUserType = "Buyer";
    ratedUserID = buyerID;
  }

  const sqlquery =
    "UPDATE orders SET ratedBy" +
    ratingUserType +
    " = 1 WHERE orderID = " +
    orderID +
    "; UPDATE user SET rating = rating + " +
    ratingValue +
    "WHERE userID = " +
    ratedUserID +
    ";";

  await sendQuery(server.pool, sqlquery);

  res.send("Updated user-ratings where the rated user = " + ratedUserType);
});

//hente relevante orders
router.get("/orders", async (req, res) => {
  const userID = req.body.state.userID;

  const sqlquery =
    "SELECT * FROM orders WHERE buyerID = " +
    userID +
    " OR sellerID = " +
    userID;

  const orders = await sendQuery(server.pool, sqlquery);

  res.send(orders);
});

module.exports = router;
