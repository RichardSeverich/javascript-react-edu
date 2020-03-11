import React, { Component } from 'react';
import NavigationBar from './../nav-bar/NavigationBar';
import './Crear.css';
import ReactDOM from 'react-dom';
import { Consumer } from './../../Context'


class Crear extends Component{
    constructor(){
        super();
        this.createModules = this.createModules.bind(this);
    }

    createModules(modules) {
      // Find the text field via the React ref
      let name = ReactDOM.findDOMNode(this.refs.name).value.trim();
      let id = '_' + Math.random().toString(36).substr(2, 9);
      let module = {
          _id: id,
          name: name
      };
      modules.push(module);
      alert("created successfully");
      //Clear Inputs
      ReactDOM.findDOMNode(this.refs.name).value = '';
    }

    render() {
        return (
        <div>
            <NavigationBar></NavigationBar>
            <div className="container col-md-3">
            <div className="card">
                <div className="card-header">
                  <h3 align="center">
                    Modulos
                  </h3>
                </div>
                <div className="card-body">
                  <form action="">
                    <div className="form-group">
                        <label>Name</label>
                        <input 
                          type="text"
                          ref="name"
                          className="form-control" 
                          minLength="3" maxLength="24">
                        </input>
                    </div>
                    <div className="text-center">
                    <Consumer> 
                        {
                            props => { return (
                              
                                    <button
                                    onClick={this.createModules.bind(this, props.modules)}
                                    type="button"
                                    className="btn btn-success">
                                    Registrar
                                  </button>
                            ) }
                        } 
                        </Consumer>
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
