import React, { Component } from 'react';
import './App.css';
import UserControl from './components/usercontrol.jsx';

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
