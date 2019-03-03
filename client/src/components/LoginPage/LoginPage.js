import React, { Component } from "react";
import "./LoginPage.css";
import RegisterUser from "../RegisterUser/RegisterUser";
import { Redirect } from "react-router-dom";
import Button from "../UI/Button/Button";
import axios from "axios";

class loginpage extends Component {
  state = {
    registerClicked: false,
    username: "",
    password: ""
  };

  handleClick = () => {
    this.setState({ registerClicked: true });
  };
  handleLogin = async e => {
    e.preventDefault();
    await axios
      .post("/api/auth", {
        email: this.state.username,
        password: this.state.password
      })
      .then(res => localStorage.setItem("token", res.data))
      .catch(err => console.log(err));
  };

  handleUsernameChange = e => {
    this.setState({ username: e.target.value });
  };
  handlePasswordChange = e => {
    this.setState({ password: e.target.value });
  };

  render() {
    if (this.state.registerClicked) {
      return <Redirect push to="/register" />;
    }

    return (
      <div className="loginpage">
        <h1>Logg inn</h1>
        <form>
          <label className="loginlabel">Brukernavn:</label>
          <br />
          <input
            className="logininput"
            type="text"
            name="username"
            onChange={this.handleUsernameChange}
          />
          <br />
          <label className="loginlabel">Passord:</label>
          <br />
          <input
            className="logininput"
            type="text"
            name="password"
            onChange={this.handlePasswordChange}
          />
          <br />
          <Button clicked={this.handleLogin}>Logg inn</Button>
          <br />
          <Button clicked={this.handleClick} l>
            Ny bruker
          </Button>
        </form>
      </div>
    );
  }
}

export default loginpage;
