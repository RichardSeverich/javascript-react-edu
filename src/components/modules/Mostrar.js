import React, { Component } from 'react';
import { modules } from './../../mock-data/modules.json';
import NavigationBar from './../nav-bar/NavigationBar';
import './Mostrar.css';

class Mostrar extends Component{
    constructor(){
        super();
        this.state = {
            modules
        }
    }
    render() {
        const rows = this.state.modules.map((module, i) => {
            return (
            <tr key={module._id}>
                <td scope="col"><input type="checkbox"></input></td>
                <td scope="col">{module._id}</td>
                <td scope="col">{module.name}</td>
                <td scope="col"> <button className="btn btn-info">Detalle</button> </td>
                <td scope="col"> <button className="btn btn-warning">Editar</button> </td>
                <td scope="col"> <button className="btn btn-danger">Eliminar</button> </td>
            </tr>
            )
        })
        return (
<div>
    <NavigationBar></NavigationBar>
    <div className="container">
        <div className="card card-users">
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
                    {rows}
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
