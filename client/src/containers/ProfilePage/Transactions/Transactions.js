<<<<<<< HEAD
import React, { Component } from 'react';
import './Transactions.css';

import Transaction from './Transaction/Transaction';

class Transactions extends Component {

  state = {
    transactions: [],
    /**
     * Dette er en DUMMY-transaksjon
     * {buyerId: buyerID (navn), sellerId: sellerID (navn), auctionItem: (navnet til gjenstanden), soldItem: (var dette et kjøp eller salg?, true/false), price: (prisen gjenstanden ble solgt for)  }
     */
  };
  
  componentDidMount = () => {
   //henter transaksjoner for brukeren ved et endpoint som JSON-objekter med ID hentet fra json-token
    /*let userTransactions;
   this.setState({transactions: userTransactions});*/
  }

  render() {

    const personalTransactions = this.state.transactions.map( (transaction) => (
      <li><Transaction /></li>
=======
import React, { Component } from "react";
import "./Transactions.css";
import jwtDecode from "jwt-decode";
import axios from "axios";
import Transaction from "./Transaction/Transaction";

class Transactions extends Component {
  state = {
    transactions: []
  };

  componentDidMount = () => {
    //henter transaksjoner for brukeren ved et endpoint som JSON-objekter med ID hentet fra json-token
    this.callbackendAPI()
      .then(res => {
        this.setState({ transactions: res });
      })
      .catch(err => console.log(err));
  };
  callbackendAPI = async () => {
    const userID = jwtDecode(localStorage.getItem("token")).userID;
    const response = await axios.get("/api/orders/myOrders?userID=" + userID);
    if (response.status !== 200) {
      throw Error(response.status);
    }
    return response.data;
  };

  render() {
    const personalTransactions = this.state.transactions.map((transaction, i) => (
      <li key={i}>
        <Transaction
          buyer={transaction.buyer}
          buyerID={transaction.buyerID}
          buyerEmail={transaction.buyerEmail}
          seller={transaction.seller}
          sellerID={transaction.sellerID}
          sellerEmail={transaction.sellerEmail}
          product={transaction.product}
          productID={transaction.productID}
          price={transaction.price}
          isSeller={transaction.isSeller}
        />
      </li>
>>>>>>> 743069dbf8c917d87f05209d54c7b3f20df16a73
    ));

    return (
      <div>
<<<<<<< HEAD
        <ul>
        {this.state.transactions.length ? personalTransactions : <p>Ingen handler enda!</p>}
        </ul>         
=======
        <ol>
          {this.state.transactions.length ? (
            personalTransactions
          ) : (
            <p>Ingen handler enda!</p>
          )}
        </ol>
>>>>>>> 743069dbf8c917d87f05209d54c7b3f20df16a73
      </div>
    );
  }
}

<<<<<<< HEAD
export default Transactions;
=======
export default Transactions;
>>>>>>> 743069dbf8c917d87f05209d54c7b3f20df16a73
