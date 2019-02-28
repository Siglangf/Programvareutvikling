import React, {Component} from 'react';
import './Auction.css';

class Auction extends Component {

  state= {
    id: this.props.id,
    name: this.props.name,
    description: this.props.description,
    picture: this.props.picture,
    currentBid: this.props.bid
  }

  render(){
    return (
      <div className="auction">
        <h4>{this.props.name}</h4>
        <p>{this.props.description}</p>
        <p>{this.props.picture}</p>
        <p>{this.props.lowestBid}</p>
      </div>
    );
  }
}

export default Auction;