import React from 'react';
import './LoginSignup.css';
import user_icon from './assets/person.png';
import email_icon from './assets/email.png';
import password_icon from './assets/password.png';

const LoginSignup = () => {
    return (
        <div className='container0'>
            <div className="header">
                <div className="text">Sign up</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                <div className="input">
                    <img src={user_icon} alt="User Icon" />
                    <input type="text" placeholder="Username" />
                </div>
                <div className="input">
                    <img src={email_icon} alt="Email Icon" />
                    <input type="email" placeholder="Email ID" />
                </div>
                <div className="input">
                    <img src={password_icon} alt="Password Icon" />
                    <input type="password" placeholder="Password" />
                </div>
            </div>
            <div className="forgot-password">Lost Password? <span/>Click Here!</div>
            <div className="submit-container">
                <div className="submit">Sign up</div>
                <div className="submit">Login</div>
            </div>
        </div>
    );
};

export default LoginSignup;
