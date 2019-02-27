import React from 'react';
import './LoginPage.css';

const loginpage = (props) => (
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
            <button class="loginbutton">Logg inn</button>
        </form>
    </div>
)

export default loginpage;