import React, { Component } from "react";
import { runInThisContext } from "vm";
import "./AuctionModal.css";
import Button from "../Button/Button";
class AuctionModal extends Component {
  //does not need any info
  state = {
    productID: "",
    title: "",
    desc: "",
    image: null,
    startingBid: "",
    highestBid: "",
    sellerID: "",
    endDate: 0,
  };

  handleNameChange = e => {
    this.setState({ title: e.target.value });
  };

  handleDescChange = e => {
    this.setState({ desc: e.target.value });
  };

  handlePictureChange = e => {
    //implementer validering av filtype ved å se på endelsen av filnavn(.png, .jpeg osv)
    this.setState({ image: e.target.files[0] });
  };

  handleBidChange = e => {
    this.setState({ startingBid: e.target.value });
  };

  handleEndDateChange = e => {
    let timeInMilli = new Date().getTime();
    this.setState({endDate: timeInMilli + (1000* 3600 * e.target.value)});
  }

  handleSubmit = e => {
    e.preventDefault();
    const productID = this.state.productID;
    const title = this.state.title;
    const desc = this.state.desc;
    const image = this.state.image;
    const bid = this.state.startingBid;
    const sellerID = this.state.sellerID;
    const endDate = this.state.endDate;

    let auc = {
      productID: productID,
      title: title,
      desc: desc,
      image: image,
      bid: bid,
      sellerID: sellerID,
      endDate: endDate
    };
    this.props.submit(auc);
  };
  render() {
    return (
        <div className="AuctionContainer">
        <h4>Skriv inn info om produktet</h4>
        <form className="inputFields" enctype="multipart/form-data">
          <input
            className="inputElementName"
            type="text"
            title="navn"
            placeholder="Navn"
            onChange={this.handleNameChange}
          />
          <input
            className="inputElementDesc"
            type="text"
            title="beskrivelse"
            placeholder="Beskrivelse"
            onChange={this.handleDescChange}
          />
          <input
            className="inputElementImage"
            type="file"
            title="bilde"
            placeholder="Bilde her..."
            onChange={this.handlePictureChange}
          />
          <input
            className="inputElementBid"
            type="number"
            title="minstebud"
            placeholder="Startbud"
            min="1"
            onChange={this.handleBidChange}
          />
           <input
            className="inputElementDesc"
            type="number"
            title="tid"
            placeholder="Hvor mange timer skal auksjonen foregå?"
            onChange={this.handleEndDateChange}
          />
          <Button clicked={this.handleSubmit}>Submit</Button>
        </form>
        </div>
    );
  }
}
export default AuctionModal;
