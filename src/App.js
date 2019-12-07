import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//Components
//import Users_mostrar from './components/users/Mostrar';
//import Navigation_bar from './components/nav-bar/NavigationBar';
import Logo from './components/logo/Logo';
import Login from './components/login/Login';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
        <Logo></Logo>
        </div>
        <Login></Login>
      </div>
    );
  }
}

export default App;
