import React, { Component } from 'react';
import jwtDecode from "jwt-decode";
import './ProfilePage.css';
import profile from '../../assets/placeholder.jpg' ;
import PropTypes from "prop-types";
import Transactions from './Transactions/Transactions';
class ProfilePage extends Component {
 
  state = { usr: {},
    transactionsClicked: false,
    
  };

  componentWillMount = () => {
   try {
    const jwt = localStorage.getItem("token"); //check if token exists
    const user = jwtDecode(jwt); //decode token
    this.setState({ usr:user }); //webtoken exist, logged in
   } catch (ex) {
     //webtoken do not exist, logged out
   }
 }

  adminPage = () => {
   return (
    <div>
    <div>
      <img className="profile--image" src={profile} alt="Placeholder"/>
    </div>
    <div id="details">
      <h1>Admin</h1>
      <h2>{this.state.usr.firstName + " " + this.state.usr.lastName}</h2>
      <h2>{this.state.usr.phoneNumber}</h2>
    </div>

    <div className="profile container grid-3">
      <div>
        <h4 onClick={() => this.setState({transactionsClicked: !this.state.transactionsClicked} )}className="profileOption">Mine handler</h4>
        {this.state.transactionsClicked ? <Transactions /> : null}
        <h4 className="profileOption">Vurderinger</h4>
      </div>
      <div>
        <h4 className="profileOption">Endre profil</h4>
        <h4 className="grayedOut">Slett konto</h4>
      </div>
      <div>
        <h4 className="profileOption">Slett bruker</h4>
      </div>
    </div>
  </div>
   );
 }

  userPage = () => {
  return (
    <div>
      <div>
        <img className="profile--image" src={profile} alt="Placeholder"/>
      </div>
      <div id="details">
        <h2>{this.state.usr.firstName + " " + this.state.usr.lastName}</h2>
        <h2>{this.state.usr.phoneNumber}</h2>
      </div>

      <div className="profile container grid-2">
        <div>
          <h4 onClick={() => this.setState({transactionsClicked: !this.state.transactionsClicked} )}className="profileOption">Mine handler</h4>
          {this.state.transactionsClicked ? <Transactions /> : null}
          <h4 className="profileOption">Vurderinger</h4>
        </div>
        <div>
          <h4 className="profileOption">Endre profil</h4>
          <h4 className="profileOption">Slett konto</h4>
        </div>
      </div>
    </div>
  );
 }

 render() {
  const isAdmin = this.state.usr.isAdmin;

  if (isAdmin === 1) {
    console.log("AdminPage");
    return (
    this.adminPage()
    );
  } 
  console.log("UserPage");
  return (
    this.userPage()
  ); 
 } 

}

ProfilePage.propTypes = {
 firstName: PropTypes.string,
 lastName: PropTypes.string,
 phoneNumber: PropTypes.string,
 email: PropTypes.string,
 zipCode: PropTypes.string,
 streetName: PropTypes.string,
 isAdmin: PropTypes.string,
};


export default ProfilePage;