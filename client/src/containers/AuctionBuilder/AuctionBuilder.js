import React, {Component} from 'react';
import './AuctionBuilder.css';
import Auction from '../AuctionBuilder/Auction/Auction';
import AuctionModal from '../../components/UI/AuctionModal/AuctionModal';

class AuctionBuilder extends Component {

  state = {
    auctions: [
      {
        id: 123,
        name: 'Test1',
        description: 'Denne varen er fin',
        picture: 'bilde',
        highestBid: 100,
        lowestBid: 50,
        endDate: '10 mars'  
      },
    ],
    isOpen: false,
  }

  //handle click on auction-button
  handleCreateAuctionClick = (auction) => {
    this.setState({isOpen: !this.state.isOpen});
  }
  //creates a new auction object
  createAuction = (auction) => {
    const auc = auction;
    this.setState( {auctions: this.state.auctions.concat(auc)} );
    console.log("test");
  }

  render(){
    //makes adjacent Auction-objects from state
    const auctions = this.state.auctions.map((auc, i) => (
      <Auction 
        name={auc.name}
        id={auc.id}
        key={i}
        description={auc.description}
        picture={auc.picture}
        lowestBid={auc.lowestBid}
        highestBid={auc.highestBid}
        endDate={auc.endDate}
      />
    ));
    
    let modal = null;
    //if the button is clicked, show the form
    if (this.state.isOpen){
      modal = <AuctionModal 
      submit={this.createAuction}/>;
    }
    return(
      <div className="auctionBoxes">
     <h1>Auksjoner</h1>
      <div><button onClick={this.handleCreateAuctionClick}>Lag ny auksjon</button></div>
      {modal}
      {auctions}
      </div>
    ); 
  }

}

export default AuctionBuilder;
