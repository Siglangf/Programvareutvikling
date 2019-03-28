const Counter = require("./Counter");
const sendQuery = require("../database");

class CounterController {
  constructor(pool) {
    this.counters = [];
    this.pool = pool;
    this.initCounters();
  }
  async initCounters() {
    const sqlquery =
      "SELECT productID,sellerID,highestBidder,endDate from products ;";
    const products = await sendQuery(this.pool, sqlquery);
    for (let i = 0; i < products.length; i++) {
      if (products[i].endDate > new Date().getTime()) {
        this.counters.push(new Counter(products[i].productID, this.pool));
      }
    }
  }
  addCounter(productID, endDate) {
    this.counters.push(new Counter(productID, endDate, this.pool));
  }
}
module.exports = CounterController;
