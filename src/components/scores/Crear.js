import React, { Component } from 'react';
import NavigationBar from './../nav-bar/NavigationBar';
import './Crear.css';

class Crear extends Component{
    constructor(){
        super();
    }
    render() {
        return (
        <div>
            <NavigationBar></NavigationBar>
            <div className="container col-md-3">
            <div className="card">
                <div className="card-header">
                  <h3 align="center">
                    Notas
                  </h3>
                </div>
                <div className="card-body">
                  <form action="">
                    <div className="form-group">
                        <label>Valor</label>
                        <input type="text" className="form-control" minLength="3" maxLength="24"></input>
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
