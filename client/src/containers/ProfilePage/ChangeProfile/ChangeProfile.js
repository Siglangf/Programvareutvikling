import Button from "../../../components/UI/Button/Button";
import "./ChangeProfile.css";
import axios from "axios";
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import jwtDecode from "jwt-decode";

class ChangeProfile extends Component {

  state = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    password: "",
    repeatedPassword: "",
    zipCode: "",
    streetName: "",
    redirect: false,
    usr: null,
  };

  componentWillMount = () => {
    try {
      const jwt = localStorage.getItem("token"); //check if token exists
      const user = jwtDecode(jwt); //decode token
      this.setState({ usr: user }); //webtoken exist, logged in
    } catch (ex) {
      //webtoken do not exist, logged out
    }
  };

  handleFirstNameChange = e => {
    this.setState({ firstName: e.target.value });
  };

  handleLastNameChange = e => {
    this.setState({ lastName: e.target.value });
  };

  handleNumberChange = e => {
    this.setState({ phoneNumber: e.target.value });
  };

  handleEmailChange = e => {
    this.setState({ email: e.target.value });
  };

  handlePasswordChange = e => {
    this.setState({ password: e.target.value });
  };

  handleZipCodeChange = e => {
    this.setState({ zipCode: e.target.value });
  };

  handleStreetNameChange = e => {
    this.setState({ streetName: e.target.value });
  };

  handleRepeatPasswordChange = e => {
    this.setState({ repeatedPassword: e.target.value });
  };

  handleSubmit = e => {
    //checks that every form has one element and password is the same as repeated password
    axios
    //HER SKAL ENDPOINT VÆRE  
    .post("/api/users/ENDREPROFILETELLERANNET", {
      //HER SKAL INFO SENDES INN 
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        phoneNumber: this.state.phoneNumber,
        email: this.state.email,
        password: this.state.password,
        zipCode: this.state.zipCode,
        streetName: this.state.streetName
      })
      .then(response => {
        console.log(response);
        this.setState({
          firstName: "",
          lastName: "",
          phoneNumber: "",
          email: "",
          password: "",
          repeatedPassword: "",
          zipCode: "",
          streetName: "",
      });
      })
      .catch(error => {
        console.log(error);
      }) 
  };
  render() {

    if (this.state.redirect) {
      return <Redirect push to="/myuser" />;
    }
    return (
      <div className="registerUser">
      <form className="registerForm">
        <h1 className="registerTitle">Endre informasjonen din her:</h1>
        <input
          type="text"
          className="loginInput"
          placeholder="Nytt fornavn"
          value={this.state.usr.firstName}
          onChange={this.handleFirstNameChange}
        />
        <input
          type="text"
          className="loginInput"
          placeholder="Nytt etternavn"
          value={this.state.usr.lastName}
          onChange={this.handleLastNameChange}
        />
        <input
          type="text"
          className="loginInput"
          placeholder="Nytt telefonnummer"
          value={this.state.usr.phoneNumber}
          onChange={this.handleNumberChange}
        />
        <input
          type="text"
          className="loginInput"
          placeholder="Ny addresse"
          value={this.state.usr.streetName}
          onChange={this.handleStreetNameChange}
        />
        <input
          type="text"
          className="loginInput"
          placeholder="Nytt postnummer"
          value={this.state.usr.zipCode}
          onChange={this.handleZipCodeChange}
        />
        <input
          type="text"
          className="loginInput"
          placeholder="Ny email"
          value={this.state.usr.email}
          onChange={this.handleEmailChange}
        />
        <input
          type="password"
          className="loginInput"
          placeholder="Nytt passord"
          onChange={this.handlePasswordChange}
        />
        <input
          type="password"
          className="loginInput"
          placeholder="Gjenta nytt passord"
          onChange={this.handleRepeatPasswordChange}
        />
      </form>
      <Button className="registerButton" clicked={this.handleSubmit}>
        Bekreft
      </Button>
      <Button className="registerButton" clicked={() => this.setState({redirect: true})}>
        Tilbake
      </Button>
  </div>
    );
  }
}

export default ChangeProfile;