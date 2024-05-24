import React, { useState } from 'react';
import './LoginSignup.css';
import email from './assets/email.png';
import password from './assets/password.png';
import person from './assets/person.png';

const LoginSignup = () => {
    const [action, setAction] = useState("Login");

    const handleActionClick = (newAction) => {
        setAction(newAction);

        const underline = document.querySelector('.underline');
        underline.classList.remove('animated');
        void underline.offsetWidth;

        underline.classList.add('animated');
    };

    return (
        <div className='container'>
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                {action === "Login" ? <div></div> : (
                    <div className="input">
                        <img src={person} width={30} alt='person' />
                        <input type="text" placeholder="Username" />
                    </div>
                )}

                <div className="input">
                    <img src={email} width={30} alt='email' />
                    <input type="email" placeholder="Email ID" />
                </div>
                <div className="input">
                    <img src={password} width={30} alt='password' />
                    <input type="password" placeholder="Password" />
                </div>
            </div>
            {action === "Sign up" ? <div></div> : <div className="forgot-password">Lost Password? <span>Click Here!</span></div>}

            <div className="submit-container">
                <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => handleActionClick("Sign up")}>Sign up</div>
                <div className={action === "Sign up" ? "submit gray" : "submit"} onClick={() => handleActionClick("Login")}>Login</div>
            </div>
        </div>
    );
};

export default LoginSignup;
