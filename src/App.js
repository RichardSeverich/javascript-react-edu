import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//Components
import Users_mostrar from './components/users/Mostrar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Users_mostrar></Users_mostrar>
        <p className="App-intro">
        </p>
      </div>
    );
  }
}

export default App;
