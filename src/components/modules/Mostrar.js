import React, { Component } from 'react';
import { modules } from './../../mock-data/modules.json';
import NavigationBar from './../nav-bar/NavigationBar';
import './Mostrar.css';
import { Consumer } from './../../Context'

class Mostrar extends Component{
    constructor(){
        super();
        this.state = {
            modules
        }
        this.eliminar = this.eliminar.bind(this);
    }

    eliminar(props, _id) {
        let coursesModules = props.coursesModules.filter((element, index) => {
            return element.module_id == _id;
        });
        if(coursesModules.length == 0){
            let modules = props.modules.filter((element, index) => {
                return element._id !== _id;
            });
            props.updateModules(modules);
            alert("deleted successfully");
        } else {
            alert("module has relations");
        }
    }

    render() {
        return (
<div>
    <NavigationBar></NavigationBar>
    <div align="center">
        <div className="card card-modules">
            <div className="card-header">
                <h3 align="center">
                    Modulos
                </h3>
            </div>
            <div className="card-body">
                <table className="table table-hover table-bordered">
                <thead>
                <tr>
                    <th scope="col"></th>
                    <th scope="col">_id</th>
                    <th scope="col">name</th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                </tr>
                </thead>
                <tbody>
                <Consumer>
                    {
                        props => {
                            return props.modules.map((module, i) => {
                                let _id = module._id;
                                return (
                                    <tr key={module._id}>
                                        <td scope="col"><input type="checkbox"></input></td>
                                        <td scope="col">{module._id}</td>
                                        <td scope="col">{module.name}</td>
                                        <td scope="col"> 
                                            <button 
                                                className="btn btn-success"
                                                
                                                >Inscribir
                                            </button> 
                                        </td>
                                        <td scope="col"> 
                                            <button
                                                
                                                className="btn btn-info">
                                                Detalle
                                            </button>
                                        </td>
                                        <td scope="col"> <button className="btn btn-warning">Editar</button> </td>
                                        <td scope="col"> 
                                            <button
                                                onClick={this.eliminar.bind(this, props, module._id)}
                                                className="btn btn-danger">
                                                Eliminar
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    }
                </Consumer>
                </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
        )
    }
}
export default Mostrar;
