import React, {Component} from 'react';

class SearchBar extends Component {

  state = {
    search: '',
  };

  render(){
    return (
      <div className="searchBarContainer">
        <div className="searchBarBar" style={{flex: 3}}>
        <input 
          style={{width: '300px'}}
          type="text"
          className="searchBarField"
          placeHolder="Søk etter en auksjon her..."
          /*onChange={e => this.props.fetchAuctions(e.target.value)}*/
          maxLength={50}
        />
          <span className="fa fa-search" />
        </div>
      </div>
    );
  }
}

export default SearchBar;