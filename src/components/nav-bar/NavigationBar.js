import React, { Component } from 'react';
import Logo from './../logo/Logo';
import './NavigationBar.css';
import logo from './logo.svg';

class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.navigateUsuariosMostrar = this.navigateUsuariosMostrar.bind(this);
  }
  navigateUsuariosMostrar() {
    this.props.history.push('/users-mostrar');
  }
    render() {
        return (
<div>     
<nav className="navbar navbar-expand-sm bg-dark navbar-dark">
 <a className="navbar-brand" href="#">
 <img src={logo} className="App-logo-bar" alt="logo" />
 </a>
  <ul className="navbar-nav">
    <div className="btn-group">
        <button type="button" className="btn btn-dark dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Adm. Usuarios
        </button>
        <div className="dropdown-menu dropdown-menu-right">
          <button onClick={this.navigateUsuariosMostrar} className="dropdown-item" type="button">Mostrar</button>
          <button className="dropdown-item" type="button">Crear</button>
        </div>
    </div>

    <div className="btn-group">
        <button type="button" className="btn btn-dark dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Adm. Cursos
        </button>
        <div className="dropdown-menu dropdown-menu-right">
          <button className="dropdown-item" type="button">Mostrar</button>
          <button className="dropdown-item" type="button">Crear</button>
        </div>
    </div>
    <div className="btn-group">
        <button type="button" className="btn btn-dark dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Adm. Modulos
        </button>
        <div className="dropdown-menu dropdown-menu-right">
          <button className="dropdown-item" type="button">Mostrar</button>
          <button className="dropdown-item" type="button">Crear</button>
        </div>
    </div>

    <div className="btn-group">
        <button type="button" className="btn btn-dark dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Adm. Notas
        </button>
        <div className="dropdown-menu dropdown-menu-right">
          <button className="dropdown-item" type="button">Mostrar</button>
          <button className="dropdown-item" type="button">Crear</button>
        </div>
    </div>
  </ul>

  <ul className="navbar-nav ml-auto nav-flex-icons">
    <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink-333" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="fas fa-user"></i>
        </a>
        <div className="dropdown-menu dropdown-menu-right dropdown-default" aria-labelledby="navbarDropdownMenuLink-333">
            <a className="dropdown-item" href="#">Opciones</a>
            <a className="dropdown-item" href="#">Salir</a>
        </div>
    </li>
  </ul>
</nav>
<Logo></Logo>
</div>
        )
    }
}
export default NavigationBar;
