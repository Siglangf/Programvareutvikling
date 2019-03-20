import React, { Component } from 'react';
import jwtDecode from "jwt-decode";
import './ProfilePage.css';
import profile from '../../assets/placeholder.jpg' ;
import PropTypes from "prop-types";
class ProfilePage extends Component {
 state = { };

  componentWillMount = () => {
   try {
    const jwt = localStorage.getItem("token"); //check if token exists
    const user = jwtDecode(jwt); //decode token
    this.setState({ user }); //webtoken exist, logged in
   } catch (ex) {
     //webtoken do not exist, logged out
   }
 }

 render() {
   return (
     <div>
       <div>
         <img className="profile--image" src={profile} alt="Placeholder"/>
       </div>
       <div id="details">
         <h2>{this.state.user.firstName + " " + this.state.user.lastName}</h2>
         <h2>{this.state.phoneNumber}</h2>
       </div>

       <div className="profile container grid-2">
         <div>
           <h4><a href="#">Mine handler</a></h4>
           <h4><a href="#">Meldinger</a></h4>
           <h4><a href="#">Vurderinger</a></h4>
         </div>
         <div>
           <h4><a href="#">Profil</a></h4>
           <h4><a href="#">Endre profil</a></h4>
           <h4><a href="#">Slett konto</a></h4>
         </div>
       </div>
     </div>
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
};


export default ProfilePage;