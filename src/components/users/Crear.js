import React, { Component } from 'react';
import { users } from './../../mock-data/users.json';

class Crear extends Component{
    constructor(){
        super();
        this.state = {
            users
        }
    }
    render() {
        return (
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
                      <label for="">Id</label>
                      <input type="text" class="form-control" maxlength="7"></input>
                    </div>
                    <div className="form-group">
                        <label for="">Contraseña</label>
                        <input type="password" class="form-control" minlength="3" maxlength="10"></input>
                    </div>
                    <div className="form-group">
                        <label for="">Nombres</label>
                        <input type="text" class="form-control" minlength="3" maxlength="10"></input>
                    </div>
                    <div className="form-group">
                        <label for="">Apellidos</label>
                        <input type="text" class="form-control" minlength="3" maxlength="10"></input>
                    </div>
                    <div className="form-group">
                        <label for="">Fecha nacimiento</label>
                        <input type="date" class="form-control"></input>
                    </div>
                    <div className="form-group">
                        <label for="">Correo</label>
                        <input type="text" class="form-control" maxlength="30"></input>
                    </div>
                    <div className="form-group">
                        <label for="">Tipo</label>
                        <select className="custom-select custom-select-sm">
                            <option value = "admin">Administrador</option>
                            <option value = "seller">Vendedor</option>
                            <option value = "client">Cliente</option>
                        </select>
                    </div>
                    <div className="text-center">
                      <button 
                        className="btn btn-success">Registrar
                      </button>
                      <button className="btn btn-info" style="margin-left: 24px">Cancelar</button>
                    </div>
                  </form>
                </div>
            </div>
          </div>
        )
    }
}
export default Crear;
