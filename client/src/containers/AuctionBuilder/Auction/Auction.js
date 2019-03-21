import React, { Component } from "react";
import "./Auction.css";
import Button from "../../../components/UI/Button/Button";
import CountdownTimer from "../../../components/UI/CountdownTimer/CountdownTimer";

class Auction extends Component {
  state = {
    productID: this.props.productID,
    title: this.props.title,
    description: this.props.description,
    image: this.props.image, //Skal være en path til directory på server der filer lagres. Se multer storage i products.js
    highestBid: this.props.highestBid,
    highestBidder: this.props.highestBidder,
    startingBid: this.props.startingBid,
    sellerID: this.props.sellerID,
    endDate: this.props.endDate,
    key: this.props.key,
    formBid: 0
  };

  handleBidChange = e => {
    this.setState({ formBid: e.target.value });
  };

  handleBidClick = () => {
    this.props.onBid(this.state.productID, this.state.formBid);
  };

  //Sett img src = image.  
  render() {
    return (
      <div className="auction">
        <p className="auctionImage">Bilde: </p>
        <img src={require('../../../assets/productImages/stol.jpg')} alt="Auksjonsbilde" className="aucImg"/>
        <h4>Tittel: {this.props.title}</h4> 
        <p>Beskrivelse: {this.props.description}</p>
        <p>Nåværende bud: {this.props.highestBid},- kr</p>
        {this.props.endDate > new Date().getTime() ? (
          <CountdownTimer
            auctionTime={this.props.endDate - new Date().getTime()}
          />
        ) : (
          <div>
            <span style={{ color: "red" }}>Auksjonen er avsluttet!</span>
          </div>
        )}
        {localStorage.getItem("token") === null ? null : (
          <React.Fragment>
            <input
              className="bidInputField"
              type="number"
              title="bud"
              placeholder="Legg inn bud her"
              onChange={this.handleBidChange}
            />
            <Button className="auctionButton" clicked={this.handleBidClick}>
              Legg inn bud
            </Button>
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default Auction;
