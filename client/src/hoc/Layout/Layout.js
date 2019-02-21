import React, { Component } from 'react';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import AboutUs from '../../components/AboutUs/AboutUs';
<<<<<<< HEAD
=======
import Header from '../../components/Header/Header';
>>>>>>> b29258026ea5d20ccac3600f63d9f241f62a74eb


class Layout extends Component {
    render () {
        return (
          <React.Fragment>
             <Toolbar />
                <main className="Content">
<<<<<<< HEAD
=======
                <Header />
>>>>>>> b29258026ea5d20ccac3600f63d9f241f62a74eb
                <AboutUs />
                </main>
          </React.Fragment>
        );
    }
}

export default Layout;