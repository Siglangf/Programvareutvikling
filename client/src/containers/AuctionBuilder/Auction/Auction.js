import React, { Component } from "react";
import "./Auction.css";

class Auction extends Component {
  state = {
    productID: this.props.ID,
    title: this.props.title,
    description: this.props.description,
    image: this.props.image,
    highestBid: this.props.highestBid
  };

  render() {
    return (
      <div className="auction">
        <h4>{this.props.title}</h4>
        <p>{this.props.description}</p>
        <p>{this.props.image}</p>
        <p>{this.props.lowestBid}</p>
      </div>
    );
  }
}

export default Auction;
