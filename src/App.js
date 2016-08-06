import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2 className="App-title">Dan Adeyemi</h2>
          <p className="App-tagline">Creative Technologist Specialising in all things digital</p>
          <a href="mailto:info@danadeyemi.com" className="App-link App-email">Email</a>
          <a href="https://www.instagram.com/iamdeaneyelid/" className="App-link App-instagram" target="_blank">Instagram</a>
          <a href="https://twitter.com/iamdeaneyelid" className="App-link App-twitter" target="_blank">Twitter</a>
          <a href="https://uk.linkedin.com/in/danadeyemi" className="App-link App-twitter" target="_blank">LinkedIn</a>
        </div>
      </div>
    );
  }
}

export default App;