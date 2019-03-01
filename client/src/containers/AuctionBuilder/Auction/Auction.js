import React, { Component } from "react";
import "./Auction.css";

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
      <div className="auction">
        <h4>Tittel: {this.props.title}</h4>
        <p>Beskrivelse: {this.props.description}</p>
        <p>Bilde: {this.props.image}</p>
        <p>Nåværende bud: {this.props.startingBid},- kr</p>
      </div>
    );
  }
}

export default Auction;
