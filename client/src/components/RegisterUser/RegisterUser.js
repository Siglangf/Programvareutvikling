import React from 'react';
import Button from '../../components/UI/Button/Button';
import './RegisterUser.css';

const registerUser = (props) => (
  <div className="registerUser">
    <form className="registerForm">
      <h1 className="registerTitle">Registrer bruker her
      </h1>
      <input 
      type="text" 
      className="loginInput" placeHolder="Fornavn"/>
      <input 
      type="text" 
      className="loginInput" placeHolder="Etternavn"/>
      <input 
      type="text" 
      className="loginInput" placeHolder="Telefonnummer"/>
      <input 
      type="text" 
      className="loginInput" placeHolder="Addresse"/>
      <input 
      type="text" 
      className="loginInput" placeHolder="Postnummer"/>
      <input 
      type="text" 
      className="loginInput" placeHolder="Email"/>
      <input 
      type="password" 
      className="loginInput" placeHolder="Passord"/>
      <input 
      type="password" 
      className="loginInput" placeHolder="Gjenta passord"/>
    </form>
    <Button className="registerButton">Bekreft</Button>
  </div>
);


export default registerUser;



//Send API to api/users/register