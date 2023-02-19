import React, { useState } from 'react';
import ElementPhoto from '../assets/element1.png'
import Logo from '../assets/logo.png'
import GoogleLogo from '../assets/googleicon.png'
import WindowLogo from '../assets/windowicon.png'
import Githublogo from '../assets/githubicon2.png'
import ElementPhoto4 from '../assets/element 4.png'

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do some authentication here...
  };

  return (
    <div className="login-container">
      <div className="shadow-box">

        {/* This is the left side of the login page   */}
        <div className="left-side">
          <div className="left-side-logo">
            <img id='logo' src={Logo} alt="logo" />
            <p id='logintxt_leftside' >For the Students By the Students</p>
          </div>
          <img id='element1Img' src={ElementPhoto} alt="Element Image" />
        </div>


        {/* This is the right side of the login page   */}
        <div className="right-side">
          <div className="counsellor-text-container">Counsellor</div>
          <div className="lets-signin-text-container">Let's You Sign In!</div>
          <div className='needhelp-container'>Need Help?</div>

          {/* Login with */}


          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              placeholder="Username"
            />
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Password"
            />
            <button type="submit">Login</button>
            <div className='loginOptions'>
              <div classname="or-login-with">Or login with </div>
              <div classname="login-with-icons">
                <img id='googleicon' src={GoogleLogo} alt="gogoleicon" />
                <img id='windowicon' src={WindowLogo} alt="windowicon" />
                < img id="githubicon" src={Githublogo} alt="githubicon" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;




