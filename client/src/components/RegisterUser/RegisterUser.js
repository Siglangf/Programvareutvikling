import React, {Component} from 'react';
import Button from '../../components/UI/Button/Button';
import './RegisterUser.css';
import PropTypes from 'prop-types';
import axios from 'axios';

class RegisterUser extends Component {

  state = {
    firstName:'',
    lastName:'',
    phoneNumber:'',
    email:'',
    password:'',
    repeatedPassword: '',
    zipCode:'',
    streetName:'',
    validState: false,
  }

  validateName = (firstname, lastname) => {
    return (firstname.length >= 1 && firstname.match(/^[A-Za-z]+$/)) && (lastname.length >= 1 && lastname.match(/^[A-Za-z]+$/));
  }

  validatePhoneNumber = (number) => {
    return number.match(/^[0-9]{8}$/)
  }

  validateZipCode = (zipcode) => {
    return zipcode.length >= 3;
  }

  validateStreetName = (street) => {
    return street.length >= 5;
  }

  validateEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  handleFirstNameChange = e => {
    this.setState( {firstName: e.target.value} );
  }

  handleLastNameChange = e => {
    this.setState( {lastName: e.target.value} );
  }

  handleNumberChange = e => {
    this.setState( {phoneNumber: e.target.value} );
  }

  handleEmailChange = e => {
    this.setState( {email: e.target.value} );
  }

  handlePasswordChange = e => {
    this.setState( {password: e.target.value} );
  }

  handleZipCodeChange = e => {
    this.setState( {zipCode: e.target.value} );
  }

  handleStreetNameChange = e => {
    this.setState( {streetName: e.target.value} );
  }

  handleRepeatPasswordChange = e => {
    this.setState( {repeatedPassword: e.target.value} );
  }

  handleSubmit = (e) => {
    e.preventDefault();
    //checks that every form has one element and password is the same as repeated password
    if (this.validateEmail(this.state.email) && this.validateName(this.state.firstName, this.state.lastName) && this.validatePhoneNumber(this.state.number) && this.validateStreetName(this.state.streetName) && this.validateZipCode(this.state.zipCode) && this.state.password === this.state.repeatedPassword ){
      this.setState({validState: true});
    }
    if (this.state.validState){
      axios.post("/api/users/register", {
        firstName: this.state.firstName,
        lastName:this.state.lastName,
        phoneNumber: this.state.phoneNumber,
        email: this.state.email,
        password: this.state.password,
        zipCode:this.state.zipCode,
        streetName:this.state.streetName,
      })
        .then(function(response) {
          this.setState({
            firstName:'',
            lastName:'',
            phoneNumber:'',
            email:'',
            password:'',
            repeatedPassword: '',
            zipCode:'',
            streetName:'',
            validState: false,
          });
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }

  render(){
    return(
    <div className="registerUser">
    <form className="registerForm">
    <h1 className="registerTitle">
      Registrer bruker her
    </h1>
    <input 
    type="text" 
    className="loginInput" placeholder="Fornavn" onChange={this.handleFirstNameChange}/>
    <input 
    type="text" 
    className="loginInput" placeholder="Etternavn" onChange={this.handleLastNameChange}/>
    <input 
    type="text" 
    className="loginInput" placeholder="Telefonnummer" onChange={this.handleNumberChange}/>
    <input 
     type="text" 
    className="loginInput" placeholder="Addresse" onChange={this.handleZipCodeChange}/>
    <input 
    type="text" 
    className="loginInput" placeholder="Postnummer" onChange={this.handleStreetNameChange}/>
    <input 
    type="text" 
    className="loginInput" placeholder="Email" onChange={this.handleEmailChange}/>
    <input 
    type="password" 
    className="loginInput" placeholder="Passord" onChange={this.handlePasswordChange}/>
    <input 
    type="password" 
    className="loginInput" placeholder="Gjenta passord" onChange={this.handleRepeatPasswordChange}/>
  </form>
  <Button className="registerButton" clicked={this.handleSubmit}>Bekreft</Button>
  </div>
    );
  }
}

RegisterUser.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  phoneNumber: PropTypes.string,
  email: PropTypes.string,
  password: PropTypes.string,
  repeatedPassword: PropTypes.string,
  zipCode: PropTypes.string,
  streetName: PropTypes.string,
  validState: PropTypes.bool,
};
 


export default RegisterUser;



//Send API to api/users/register