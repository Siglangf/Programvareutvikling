import React, { Component } from 'react';
import './Transactions.css';

import Transaction from './Transaction/Transaction';

class Transactions extends Component {

  state = {
    transactions: [],
    /**
     * Dette er en DUMMY-transaksjon
     * {buyerId: buyerID (navn), sellerId: sellerID (navn), auctionItem: (navnet til gjenstanden),  soldItem: (var dette et kjøp eller salg?, true/false), price: (prisen gjenstanden ble solgt for)  }
     */
  };
  
  componentDidMount = () => {
   //henter transaksjoner for brukeren ved et endpoint som JSON-objekter med ID hentet fra json-token
    let userTransactions;
   this.setState({transactions: userTransactions});
  }

  render() {

    const personalTransactions = this.state.transactions.map( (transaction) => (
      <li className="transactionItem"><Transaction /></li>  
    ));

    return (
      <div>
        <ul>
        {personalTransactions}
        </ul>         
      </div>
    );
  }
}

export default Transactions;