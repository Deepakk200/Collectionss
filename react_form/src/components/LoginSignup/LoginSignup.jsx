import React, { useState } from 'react';
import './LoginSignup.css';
import email from './assets/email.png'
import password from './assets/password.png'
import person from './assets/person.png'
const LoginSignup = () => {
    const [action, setAction] = useState("Login");

    return (
        <div className='container'>
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                {action === "Login" ? <div></div> : (
                    <div className="input">
                      <img src={person} width={30} alt='person'></img>
                        <input type="text" placeholder="Username" />
                    </div>
                )}

                <div className="input">
                    <img src={email} width={30} alt='email'></img>
                    <input type="email" placeholder="Email ID" />
                </div>
                <div className="input">
                    <img src = {password} alt='password' ></img>
                    <input type="password" placeholder="Password" />
                </div>
            </div>
            {action === "Sign up" ? <div></div> : <div className="forgot-password">Lost Password? <span>Click Here!</span></div>}

            <div className="submit-container">
                <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => { setAction("Sign up") }}>Sign up</div>
                <div className={action === "Sign up" ? "submit gray" : "submit"} onClick={() => { setAction("Login") }}>Login</div>
            </div>
        </div>
    );
};

export default LoginSignup;