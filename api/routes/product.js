//Here we add all the functions for usershandling

const express = require("express");
const router = express.Router();
const sendQuery = require("../database");
let server = require("../../server"); //get pool-connection from server

//sette inn auksjon
router.post('/auction', async (req, res) => {
  const title = req.body.state.title;
  const description = req.body.state.description;
  const image = req.body.state.image; //forsiktig med filtype
  const startingBid = req.body.state.startingBid;
  const highestBid = startingBid;
  const highestBidderID = 0; //dersom ingen byr på objektet kan vi sjekke om highestbidder er 0, og terminere annonsen uten en kjøper
  const sellerID = req.body.state.userID;
  const endDate = req.body.state.endDate; //forsiktig med datatype


  const userValueArray = [title, description, image, highestBid, highestBidderID, startingBid, sellerID, endDate];
  
  const sqlquery = ("INSERT INTO product (title, description, image, highestBid, highestBidderID, startingBid, sellerID, endDate) VALUES ?")

  await sendQuery(server.pool, sqlquery, userValueArray);

  res.send("Product inserted into table with startingbid: " + startingBid);
});

//oppdatere highestBidder
router.post('/newBid', async (req, res) => {
  const userID = req.body.state.userID;
  const productID = req.body.state.productID;
  const highestBid = req.body.state.highestBid;
  
  const sqlquery = "UPDATE product SET highestBid = " + highestBid + ", highestBidder = " + userID + " WHERE productID = " + productID; 

  await sendQuery(server.pool, sqlquery);

  res.send("Updated highestBidder where productID = " + productID);
});

//henter auskjoner
router.get('/auctions', async (req, res) =>{
  const sqlquery = ("SELECT * FROM product ORDER BY endDate ASC");
  const auctions = await sendQuery(server.pool, sqlquery);

  res.send(auctions);
});

module.exports = router;
