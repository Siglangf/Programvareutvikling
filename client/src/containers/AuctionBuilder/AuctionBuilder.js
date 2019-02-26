import React, {Component} from 'react';
import './AuctionBuilder.css';
import Auction from '../AuctionBuilder/Auction/Auction';

class AuctionBuilder extends Component {

  state = {
    auctions: [
      {
        name: 'Test1',
        description: 'Denne varen er fin',
        picture: 'bilde',
        bid: 100,  
      },
      {
        name: 'Test2',
        description: 'Denne varen er helt ok',
        picture: 'bilde',
        bid: 50,  
      }
    ],
    isOpen: false,

  }

  handleCreateAuction = (auction) => {

  }

  createAuction = (auction) => {
    const auc = auction;
    this.setState( {auctions: this.state.auctions.concat(auc)} );
  }

  render(){

    const auctions = this.state.auctions.map((auc, i) => (
      <Auction 
        name={auc.name}
        id={i}
        description={auc.description}
        picture={auc.picture}
        currentbid={auc.bid}
      />
    ));
    
    return(
      <div className="auctionBoxes">
      <div><button onClick={this.handleCreateAuction}>Lag ny auksjon</button></div>
      {auctions}
      </div>
    ); 
  }

}

export default AuctionBuilder;
