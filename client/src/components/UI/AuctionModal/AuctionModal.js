<<<<<<< HEAD
import React, {Component} from   'react';
import { runInThisContext } from 'vm';
import './AuctionModal.css';
=======
import React, { Component } from "react";
import { runInThisContext } from "vm";
>>>>>>> 776e4ffb3046c81f5641ad3b8d392ded719c2dcb

class AuctionModal extends Component {
  //does not need any info
  state = {
    title: "",
    desc: "",
    image: "",
    startingBid: "",
    highestBid: ""
  };

  handleNameChange = e => {
    this.setState({ title: e.target.value });
  };

  handleDescChange = e => {
    this.setState({ desc: e.target.value });
  };

  handlePictureChange = e => {
    this.setState({ image: e.target.value });
  };

  handleBidChange = e => {
    this.setState({ startingBid: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const title = this.state.title;
    const desc = this.state.desc;
    const image = this.state.image;
    const bid = this.state.startingBid;
    const auc = {
      id: "123",
      title: title,
      description: desc,
      image: image,
      startingBid: bid,
      highestBid: bid
    };
    this.props.submit(auc);
  };

  render() {
    return (
      <React.Fragment>
<<<<<<< HEAD
    <h4>Skriv inn info om produktet</h4>
        <form className="inputFields">
          <input type="text" name="navn" placeholder="Navn" className="inputElementName" onChange={this.handleNameChange}/>
          <input type="text" name="beskrivelse" placeholder="Beskrivelse" className="inputElementDesc" onChange={this.handleDescChange}/>
          <input type="text" name="bilde" placeholder="Bilde her..." className="inputElementImage" onChange={this.handlePictureChange} />
          <input type="number" name="minstebud" placeholder="Startbud" min="1" className="inputElementBid" onChange={this.handleBidChange}/>
         <button onClick={this.handleSubmit}>Submit</button>
          </form>
    </React.Fragment>
=======
        <h4>Skriv inn info om produktet</h4>
        <form>
          <input
            type="text"
            title="navn"
            placeholder="Navn"
            onChange={this.handleNameChange}
          />
          <input
            type="text"
            title="beskrivelse"
            placeholder="Beskrivelse"
            onChange={this.handleDescChange}
          />
          <input
            type="text"
            title="bilde"
            placeholder="Bilde her..."
            onChange={this.handlePictureChange}
          />
          <input
            type="number"
            title="minstebud"
            placeholder="Startbud"
            min="1"
            onChange={this.handleBidChange}
          />
          <button onClick={this.handleSubmit}>Submit</button>
        </form>
      </React.Fragment>
>>>>>>> 776e4ffb3046c81f5641ad3b8d392ded719c2dcb
    );
  }
}

export default AuctionModal;
