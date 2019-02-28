import React, { Component } from "react";
import "./AuctionBuilder.css";
import Auction from "../AuctionBuilder/Auction/Auction";
import AuctionModal from "../../components/UI/AuctionModal/AuctionModal";
import Axios from "axios";

class AuctionBuilder extends Component {
  state = {
    auctions: [],
    isOpen: false
  };

  componentDidMount = () => {
    this.callBackendAPI()
      .then(res => this.setState({ auctions: res }))
      .catch(err => console.log(err));
  };

  callBackendAPI = async () => {
    const response = await Axios.get("/api/products/all");
    const body = response.data;

    if (response.status !== 200) {
      throw Error(response.status);
    }
    return body;
  };

  //handle click on auction-button
  handleCreateAuctionClick = auction => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  //creates a new auction object
  createAuction = auction => {
    const auc = auction;
    this.setState({ auctions: this.state.auctions.concat(auc) });
    console.log("test");
  };

  render() {
    //makes adjacent Auction-objects from state
    const auctions = this.state.auctions.map((auc, i) => (
      <Auction
        title={auc.title}
        productID={auc.productID}
        key={i}
        description={auc.description}
        image={auc.image}
        startingBid={auc.startingBid}
        highestBid={auc.highestBid}
        highestBidder={auc.highestBidder}
        sellerID={auc.sellerID}
        endDate={auc.endDate}
      />
    ));

    let modal = null;
    //if the button is clicked, show the form
    if (this.state.isOpen) {
      modal = <AuctionModal submit={this.createAuction} />;
    }
    return (
      <div className="auctionBoxes">
        <h1>Auksjoner</h1>
        <div>
          <button onClick={this.handleCreateAuctionClick}>
            Lag ny auksjon
          </button>
        </div>
        {modal}
        {auctions}
      </div>
    );
  }
}

export default AuctionBuilder;
