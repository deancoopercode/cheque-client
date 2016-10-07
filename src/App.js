import React, { Component } from 'react';
import './App.css';

var UserControl = require('./components/final.js');

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
            <UserControl/>
        </div>
      </div>
    );
  }
}

export default App;
