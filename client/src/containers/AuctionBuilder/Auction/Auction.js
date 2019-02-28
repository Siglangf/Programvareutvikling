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
        <h4>{this.props.title}</h4>
        <p>{this.props.description}</p>
        <p>{this.props.image}</p>
        <p>{this.props.startingBid}</p>
      </div>
    );
  }
}

export default Auction;
