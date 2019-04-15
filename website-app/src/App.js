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
        <section>
          <MouseEventSink />
          <p>
            The fledgling site for my tech, art, and music and general creative stuff.
            At present my creative stuff is scattered across:
          </p>
          <ul>
            <li>molorosh.tumblr.com</li>
            <li>github.com/ricketts30</li>
            <li>github.com/molorosh</li>
          </ul>
          <TheEyesHaveIt
            identifier="avatar01"
            />
        </section>
      </div>
    );
  }
}

export default App;
