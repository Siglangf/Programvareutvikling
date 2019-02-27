import React from 'react';
import './LoginPage.css';

const loginpage = (props) => (
    <div className="loginpage">
        <h1>Logg inn</h1>
        <form>
            <label>Brukernavn:</label>
            <br/>
            <input type="text" name="username" />
            <br/>
            <label>Passord:</label>
            <br/>
            <input type="text" name="password" />
            <br/>
            <button>Logg inn</button>
        </form>
    </div>
)

export default loginpage;