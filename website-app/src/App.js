import React, { Component } from 'react';
import logo from './molorosh_sqr_200.png';
import './App.css';
import MouseEventSink from './MouseEventSink';
import TheEyesHaveIt from './TheEyesHaveIt';

class App extends Component {
  render() {
    return (
      <div className="App">
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
          <div className="grid3x3">
            
            <div>
              <MouseEventSink debug={false} />
            </div>

            <div>          
              <h1>Welcome</h1>
              <p>
                This is the μ site for my tech, art, and music and general creative stuff.
                At present my creative stuff is scattered across:
              </p>
            </div>

            <div></div>
            
            <div className="divRightAlign"> 
              <h2>Code Repositories:</h2>
              <p><a target="_blank" href="https://github.com/ricketts30">github.com/ricketts30</a></p>
              <p><a target="_blank" href="https://github.com/molorosh">github.com/molorosh</a></p>
            </div>

            <div>
              <TheEyesHaveIt 
                debug={false}
                identifier="avatar01"
                />
            </div>

            <div className="divLeftAlign">
              <h2>μ Blogs:</h2>
              <p><a target="_blank" href="https://molorosh.tumblr.com">molorosh.tumblr.com</a></p>
            </div>

          </div>
        </article>
      </div>
    );
  }
}

export default App;
