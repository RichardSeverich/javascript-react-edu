import React, { Component } from 'react';
import Logo from './../logo/Logo';
import './NavigationBar.css';
import logo from './logo.svg';
import { withRouter } from 'react-router-dom';

class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.navigateUsuariosMostrar = this.navigateUsuariosMostrar.bind(this);
    this.navigateUsuariosCrear = this.navigateUsuariosCrear.bind(this);
    this.navigateCursosMostrar = this.navigateCursosMostrar.bind(this);
    this.navigateCursosCrear = this.navigateCursosCrear.bind(this);
    this.navigateModulosMostrar = this.navigateModulosMostrar.bind(this);
    this.navigateModulosCrear = this.navigateModulosCrear.bind(this);
    this.navigateLogin = this.navigateLogin.bind(this);
    this.navigateNotasCrear = this.navigateNotasCrear.bind(this);
    this.navigateNotasMostrar = this.navigateNotasMostrar.bind(this);
    this.navigateInscripcionesMostrar = this.navigateInscripcionesMostrar.bind(this);
    this.navigateInscripcionesCrear = this.navigateInscripcionesCrear.bind(this);
    this.navigateCursosModulosMostrar = this.navigateCursosModulosMostrar.bind(this);
    this.navigateCursosModulosCrear = this.navigateCursosModulosCrear.bind(this);
  }
  
  navigateUsuariosMostrar() {
    this.props.history.push('/users-mostrar');
  }

  navigateUsuariosCrear() {
    this.props.history.push('/users-crear');
  }

  navigateCursosMostrar() {
    this.props.history.push('/courses-mostrar');
  }

  navigateCursosCrear() {
    this.props.history.push('/courses-crear');
  }

  navigateModulosMostrar() {
    this.props.history.push('/modules-mostrar');
  }

  navigateNotasCrear() {
    this.props.history.push('/scores-crear');
  }

  navigateNotasMostrar() {
    this.props.history.push('/scores-mostrar-courses');
  }

  navigateModulosCrear() {
    this.props.history.push('/modules-crear');
  }

  navigateInscripcionesMostrar() {
    this.props.history.push('/inscriptions-mostrar');
  }

  navigateInscripcionesCrear() {
    this.props.history.push('/inscriptions-crear-courses');
  }

  navigateCursosModulosMostrar() {
    this.props.history.push('/courses-modules-mostrar');
  }

  navigateCursosModulosCrear() {
    this.props.history.push('/courses-modules-crear-courses');
  }

  navigateLogin(){
    this.props.history.push('/login');
  }
    render() {
        return (
<div>
<nav className="navbar navbar-expand-sm bg-dark navbar-dark">
 <a className="navbar-brand" href="/nav-bar">
 <img src={logo} className="App-logo-bar" alt="logo" />
 </a>
  <ul className="navbar-nav">
    <div className="btn-group">
        <button type="button" className="btn btn-dark dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Adm. Usuarios
        </button>
        <div className="dropdown-menu dropdown-menu-right">
          <button onClick={this.navigateUsuariosMostrar} className="dropdown-item" type="button">Mostrar</button>
          <button onClick={this.navigateUsuariosCrear} className="dropdown-item" type="button">Crear</button>
        </div>
    </div>

    <div className="btn-group">
        <button type="button" className="btn btn-dark dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Adm. Cursos
        </button>
        <div className="dropdown-menu dropdown-menu-right">
          <button onClick={this.navigateCursosMostrar} className="dropdown-item" type="button">Mostrar</button>
          <button onClick={this.navigateCursosCrear} className="dropdown-item" type="button">Crear</button>
        </div>
    </div>

    <div className="btn-group">
        <button type="button" className="btn btn-dark dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Adm. Inscripciones
        </button>
        <div className="dropdown-menu dropdown-menu-right">
          <button onClick={this.navigateInscripcionesMostrar} className="dropdown-item" type="button">Mostrar</button>
          <button onClick={this.navigateInscripcionesCrear} className="dropdown-item" type="button">Crear</button>
        </div>
    </div>

    <div className="btn-group">
        <button type="button" className="btn btn-dark dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Adm. Planes
        </button>
        <div className="dropdown-menu dropdown-menu-right">
          <button onClick={this.navigateCursosModulosMostrar} className="dropdown-item" type="button">Mostrar</button>
          <button onClick={this.navigateCursosModulosCrear} className="dropdown-item" type="button">Crear</button>
        </div>
    </div>

    <div className="btn-group">
        <button type="button" className="btn btn-dark dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Adm. Modulos
        </button>
        <div className="dropdown-menu dropdown-menu-right">
          <button onClick={this.navigateModulosMostrar} className="dropdown-item" type="button">Mostrar</button>
          <button onClick={this.navigateModulosCrear} className="dropdown-item" type="button">Crear</button>
        </div>
    </div>

    <div className="btn-group">
        <button type="button" className="btn btn-dark dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Adm. Notas
        </button>
        <div className="dropdown-menu dropdown-menu-right">
          <button onClick={this.navigateNotasMostrar} className="dropdown-item" type="button">Mostrar</button>
          <button onClick={this.navigateNotasCrear} className="dropdown-item" type="button">Crear</button>
        </div>
    </div>

    <div className="btn-group">
        <button type="button" className="btn btn-dark dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Adm. Repores
        </button>
        <div className="dropdown-menu dropdown-menu-right">
          <button className="dropdown-item" type="button">Reporte Usuarios</button>
          <button className="dropdown-item" type="button">Reporte Cursos </button>
          <button className="dropdown-item" type="button">Reporte Inscripciones </button>
          <button className="dropdown-item" type="button">Reporte Modulos </button>
          <button className="dropdown-item" type="button">Reporte Cursos Modulos </button>
          <button className="dropdown-item" type="button">Reporte Notas </button>
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
            <a onClick={this.navigateLogin} className="dropdown-item" href="#">Salir</a>
        </div>
    </li>
  </ul>
</nav>
<Logo></Logo>
</div>
        )
    }
}
export default withRouter(NavigationBar);
