import React, { Component } from 'react';
import logo from './molorosh_sqr_200.png';
import './App.css';
import MouseEventSink from './MouseEventSink';
import TheEyesHaveIt from './TheEyesHaveIt';
import ThisIsNotAGame from './ThisIsNotAGame';

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
          <div className="mainLayout">
            
            <div>
              <MouseEventSink debug={false} />
            </div>

            <div className="welcome">          
              <h1>Welcome</h1>
            </div>

            <div id="creepyAvatar01" className="creepyAvatar">
              <TheEyesHaveIt 
                debug={false}
                identifier="avatar01"
                />
            </div>

            <div className="welcome">          
              <p>
                This is the micro-site for my tech, art, music and general creative stuff.  
                At present my creative stuff is scattered across:
              </p>
            </div>
            
            <div className="flexiblePanel">
              
              <div className="codeRepositories flexCard"> 
                <h2>Repos &amp; Apps</h2>
                <p><a rel="noopener noreferrer" target="_blank" href="https://github.com/ricketts30">github.com/ricketts30</a></p>
                <p><a rel="noopener noreferrer" target="_blank" href="https://github.com/molorosh">github.com/molorosh</a></p>
                <p><a rel="noopener noreferrer" target="_blank" href="https://molorosh.github.io/pharma/">Pharma</a></p>
              </div>

              <div className="microBlogs flexCard">
                <h2>Micro-Blogs</h2>
                <p><a rel="noopener noreferrer" target="_blank" href="https://molorosh.tumblr.com">tumblr</a></p>
                <p><a rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/molorosh/">instagram</a></p>
              </div>

              <div className="contactDetails flexCard">   
                <h2>Contact Me</h2>  
                <p>my email is 'encrypted' with the ROT-13 cypher:</p>     
                <p>zbybebfu@tznvy.pbz</p>
                <p><a rel="noopener noreferrer" target="_blank" href="https://rot13.com/">https://rot13.com/</a></p>
              </div>

            </div>

            <ThisIsNotAGame id="definatelyNoGamesHere" />

          </div>
        </article>
      </div>
    );
  }
}

export default App;
