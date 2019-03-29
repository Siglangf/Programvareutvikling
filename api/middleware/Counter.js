const sendQuery = require("../database");
const addOrder = require("../helpfunctions").addOrder;

class Counter {
  constructor(productID, endDate, pool) {
    this.timer = null;
    this.productID = productID;
    this.endDate = endDate;
    this.startTimer(productID, pool);
  }
  startTimer(productID, pool) {
    const timeRemaining = this.endDate - new Date().getTime();
    this.timer = setTimeout(async () => {
      const sqlquery =
        "SELECT productID,sellerID,highestBidder,endDate from products WHERE productID=" +
        productID +
        ";";
      const product = await sendQuery(pool, sqlquery);
      addOrder(
        pool,
        product[0].highestBidder,
        product[0].sellerID,
        product[0].productID,
        0,
        0
      );
    }, timeRemaining);
  }
}
module.exports = Counter;
