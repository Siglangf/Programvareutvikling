import React, { Component } from "react";
import "./AuctionBuilder.css";
import Auction from "../AuctionBuilder/Auction/Auction";
import AuctionModal from "../../components/UI/AuctionModal/AuctionModal";
import axios from "axios";
import Button from "../../components/UI/Button/Button";
import SearchBar from "../../components/UI/SearchBar/SearchBar";

class AuctionBuilder extends Component {
  state = {
    auctions: [],
    isOpen: false,
    searchField: '',
  };

  componentDidMount = () => {
    this.callBackendAPI()
      .then(res => this.setState({ auctions: res }))
      .catch(err => console.log(err));
  };

  callBackendAPI = async () => {
    const response = await axios.get("/api/products/all");
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

  //handles changes in auction bid
  handleSearchChange = (e) => {
    this.setState({searchField: e.target.value});
  }

  //creates a new auction object
  createAuction = auction => {
    const auc = auction;
    this.setState({ auctions: this.state.auctions.concat(auc), isOpen: false });
    axios.post("/api/products/newProduct", {
    productID: auc.productID,
    title: auc.title,
    description: auc.desc,
    image: auc.image,
    startingBid: auc.bid,
    sellerID: auc.sellerID,
    endDate: auc.endDate
    })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  fetchAuctions = () => {
    let searchedAuctions = [];
    for (let i=0; i <this.state.auctions.length; i++){
      if (this.state.auctions[i].title.toLowerCase().indexOf(this.state.searchField.toLowerCase()) !== -1 || this.state.searchField === ''){
        searchedAuctions.push(this.state.auctions[i]);
      }
    }
    return searchedAuctions;
  }

  render() {
    //makes adjacent Auction-objects from state
    const searchedAuctions = this.fetchAuctions();
    
    const auctions =  searchedAuctions.map( (auc, i)=> (
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
          <SearchBar 
            changed={this.handleSearchChange}
          />
          <Button clicked={this.handleCreateAuctionClick}>Ny annonse</Button>
        </div>
        {modal}
        <br />
        {auctions}
      </div>
    );
  }
}

export default AuctionBuilder;
