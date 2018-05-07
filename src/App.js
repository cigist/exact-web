import React, { Component } from 'react';
import logo from './img/img-logo.png';
import './App.css';
import Menu from './pages/menu/menu.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <p className="App-intro">
         <input type="text" placeholder="Input nomer kiriman"/>
        </p>
      </div>
    );
  }
}

export default App;
