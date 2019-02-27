import React, { Component } from 'react';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import AboutUs from '../../components/AboutUs/AboutUs';
import Header from '../../components/Header/Header';
import AuctionBuilder from '../../containers/AuctionBuilder/AuctionBuilder';
import LoginPage from '../../components/LoginPage/LoginPage';


class Layout extends Component {
    render () {
        return (
          <React.Fragment>
             <Toolbar />
                <main className="Content">
                <Header />
                <LoginPage />
                <AboutUs />
                <AuctionBuilder />
                </main>
          </React.Fragment>
        );
    }
}

export default Layout;