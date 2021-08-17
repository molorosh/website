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

            <div className="statement">
              <p className="fancy">I have written websites; web services; mobile apps; progressive web apps; high-performance databases; windows services; XML and JSON APIs; desktop applications; card-readers; real-time embedded software; image processors; and even one art installation.  But I have never written a game ... yet</p>
            </div>

            <ThisIsNotAGame id="definatelyNoGamesHere" identifier="definatelyNoGamesHere" />

          </div>
        </article>

        </div>

        <div className="footerContent">
          <p>Website powered by 
          <a className="footer" rel="noopener noreferrer" target="_blank" href="https://reactjs.org/">React</a>
          and 
          <a className="footer" rel="noopener noreferrer" target="_blank" href="https://phaser.io/">Phaser</a>
          . Source-code at 
          <a className="footer" rel="noopener noreferrer" target="_blank" href="https://github.com/molorosh/website">GitHub</a>
          .</p>
        </div>

      </div>
    );
  }
}

export default App;
