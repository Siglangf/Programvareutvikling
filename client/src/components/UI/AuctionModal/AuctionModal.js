import React, {Component} from   'react';
import { runInThisContext } from 'vm';

class AuctionModal extends Component {
  //does not need any info
  state = {
    name: '',
    desc: '',
    picture: '',
    lowestBid: '',
    highestBid: '', 
  };

  handleNameChange = (e) => {
    this.setState( {name: e.target.value} );
  }

  handleDescChange = (e) => {
    this.setState( {desc: e.target.value} );
  }

  handlePictureChange = (e) => {
    this.setState( {picture: e.target.value} );
  }

  handleBidChange = (e) => {
    this.setState( {lowestBid: e.target.value} )
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const name = this.state.name;
    const desc = this.state.desc;
    const picture = this.state.picture;
    const bid = this.state.lowestBid;
    const auc = {id: '123', 'name': name, 'description': desc, 'picture': picture, lowestBid: bid, highestBid: bid};
    this.props.submit(auc);
  }

  render(){
    return(
      <React.Fragment>
    <h4>Skriv inn info om produktet</h4>
        <form>
          <input type="text" name="navn" placeholder="Navn" onChange={this.handleNameChange}/>
          <input type="text" name="beskrivelse" placeholder="Beskrivelse" onChange={this.handleDescChange}/>
          <input type="text" name="bilde" placeholder="Bilde her..." onChange={this.handlePictureChange} />
          <input type="number" name="minstebud" placeholder="Startbud" min="1" onChange={this.handleBidChange}/>
         <button onClick={this.handleSubmit}>Submit</button>
          </form>
    </React.Fragment>
    );
  }
}

export default AuctionModal;