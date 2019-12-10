import React, { Component } from 'react';
import { users } from './../../mock-data/users.json';
import NavigationBar from './../nav-bar/NavigationBar';
import './Crear.css';

class Crear extends Component{
    constructor(){
        super();
        this.state = {
            users
        }
    }
    render() {
        return (
        <div>
            <NavigationBar></NavigationBar>
            <div className="container col-md-3">
            <div className="card">
                <div className="card-header">
                  <h3 align="center">
                    Usuarios
                  </h3>
                </div>
                <div className="card-body">
                  <form action="">
                    <div className="form-group">
                      <label>Id</label>
                      <input type="text" className="form-control" maxLength="7"></input>
                    </div>
                    <div className="form-group">
                        <label>nickname</label>
                        <input suggested="my_nickname" className="form-control" minLength="3" maxLength="10"></input>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input suggested="mypass123" type="password" className="form-control" minLength="3" maxLength="10"></input>
                    </div>
                    <div className="form-group">
                        <label>Names</label>
                        <input type="text" className="form-control" minLength="3" maxLength="24"></input>
                    </div>
                    <div className="form-group">
                        <label>Last Names</label>
                        <input type="text" className="form-control" minLength="3" maxLength="24"></input>
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="text" className="form-control" maxLength="32"></input>
                    </div>
                    <div className="form-group">
                        <label>Tipo</label>
                        <select className="custom-select custom-select-sm">
                            <option value="Admin">Admin</option>
                            <option value="Student">Student</option>
                            <option value="Proffesor">Professor</option>
                            <option value="Trainer">Trainer</option>
                            <option value="Engineer">Engineer</option>
                        </select>
                    </div>
                    <div className="text-center">
                      <button 
                        className="btn btn-success">Registrar
                      </button>
                      <button className="btn btn-info Boton-cancelar">Cancelar</button>
                    </div>
                  </form>
                </div>
            </div>
          </div>
        </div>
        )
    }
}
export default Crear;
