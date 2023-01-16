import React, { Component } from 'react';
import logo from './molorosh_sqr_200.png';
import './App.css';
import faceLogo from './face_app_trans.png';

class FacePrivacy extends Component {
  render() {
    return (
      <div className="App">

        <div className="mainContent">

        <header className="App-header">
          <div className="App-header-logo-line">
            <div className="App-header-logo">
              <img src={logo} className="App-logo" alt="logo" />
            </div>
            <div className="App-header-name">
              <h1 className="App-header-title">molorosh</h1>
            </div>
          </div>
        </header>
        <article>
          <div className="mainLayout">
            
            <div className="welcome">          
              <h1>Face</h1>
            </div>

            <div className="welcome">
              <img src={faceLogo} className="App-logo" alt="logo" />
            </div>

            <div className="welcome">          
              <h2>Privacy Statement</h2>
            </div>

            <div className="welcome">          
              <p>
                Face is an Android Watchface.  It does not collect and transmit any personal information about you whatsover.
              </p>
              <p>
                Please note that the Google / Apple / Samsung application stores will track who has this watch face installed.  This tracking 
                will include your app store account identifier.
              </p>
            </div>
            
          </div>
        </article>

        </div>

        <div className="footerContent">
          <p>Website powered by 
          <a className="footer" rel="noopener noreferrer" target="_blank" href="https://reactjs.org/">React</a>
          . Source-code at 
          <a className="footer" rel="noopener noreferrer" target="_blank" href="https://github.com/molorosh/website">GitHub</a>
          .</p>
        </div>

      </div>
    );
  }
}

export default FacePrivacy;
