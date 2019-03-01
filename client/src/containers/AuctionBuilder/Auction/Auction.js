import React, { Component } from "react";
import "./Auction.css";
import Button from '../../../components/UI/Button/Button';

class Auction extends Component {
  state = {
    productID: this.props.productID,
    title: this.props.title,
    description: this.props.description,
    image: this.props.image,
    highestBid: this.props.highestBid,
    highestBidder: this.props.highestBidder,
    startingBid: this.props.startingBid,
    sellerID: this.props.sellerID,
    endDate: this.props.endDate,
    key: this.props.key
  };

  render() {
    return (
      <React.Fragment>
      <div className="auction">
        <p className="auctionImage">Bilde: {this.props.image}</p>
        <h4>Tittel: {this.props.title}</h4>
        <p>Beskrivelse: {this.props.description}</p>
        <p>Nåværende bud: {this.props.highestBid},- kr</p>
        <input
            className="bidInputField"
            type="number"
            title="bud"
            placeholder="Legg inn bud her"
            onChange={this.handleNameChange}
          />
        <Button className="auctionButton">Legg inn bud</Button>
      </div>
      </React.Fragment>
    );
  }
}

export default Auction;
