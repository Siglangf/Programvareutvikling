import React, { Component } from "react";
import "./App.css";
import Layout from "./hoc/Layout/Layout";
import Header from "./components/Header/Header";
import LoginPage from "./components/LoginPage/LoginPage";
import AboutUs from "./components/AboutUs/AboutUs";
import AuctionBuilder from "./containers/AuctionBuilder/AuctionBuilder";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//Main site of the application, this is where we import other components

class App extends Component {
  state = {
    data: null,
    isAuthenticated: true
  };

  componentDidMount() {
    // Call our fetch function below once the component mounts
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }
  // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch("/api/users/all");
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }
    //console.log(body);
    return body;
  };

  render() {
    return (
      <div>
        <Layout />
        <Header />
         <Switch>
            <Route path="/auctions" component={AuctionBuilder} />
            <Route path="/login" exact component={LoginPage} />
            <Route path="/" component={AboutUs} />
          </Switch>
       </div>
    );
  }
}

export default App;
