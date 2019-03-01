import React, { Component } from 'react';
import './LoginPage.css';
import RegisterUser from '../RegisterUser/RegisterUser';
import { Redirect } from 'react-router-dom';
import Button from '../UI/Button/Button';

class loginpage extends Component {
    
    state = {
        registerClicked: false,
    }

    handleClick = () => {
        this.setState( {registerClicked: true} );
    }

    render(){
        if (this.state.registerClicked){
            return <Redirect push to="/register" />
        }

        return(
        <div className="loginpage">
        <h1>Logg inn</h1>
        <form>
        <label class="loginlabel">Brukernavn:</label>
        <br/> 
        <input class="logininput" type="text" name="username" />
        <br/>
        <label class="loginlabel">Passord:</label>
        <br/>
        <input class="logininput" type="text" name="password" />
        <br/>
        <Button>Logg inn</Button>
        <br></br>
        <Button clicked={this.handleClick}l>Ny bruker</Button>
        </form>
    </div>

        );
    }
}

export default loginpage;