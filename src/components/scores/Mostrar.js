import React, { Component } from 'react';
import { scores } from './../../mock-data/scores.json';
import NavigationBar from './../nav-bar/NavigationBar';
import './Mostrar.css';

class Mostrar extends Component{
    constructor(){
        super();
        this.state = {
            scores
        }
    }
    render() {
        const rows = this.state.scores.map((score, i) => {
            return (
            <tr key={score._id}>
                <td scope="col"><input type="checkbox"></input></td>
                <td scope="col">{score.id_user}</td>
                <td scope="col">{score.user_name}</td>
                <td scope="col">{score.user_last_name}</td>
                <td scope="col">{score.module_name}</td>
                <td scope="col">{score.value}</td>
                <td scope="col"> <button className="btn btn-warning">Editar</button> </td>
                <td scope="col"> <button className="btn btn-danger">Eliminar</button> </td>
            </tr>
            )
        })
        return (
<div>
    <NavigationBar></NavigationBar>
    <div align="center">
        <div className="card card-scores">
            <div className="card-header">
                <h3 align="center">
                    Notas
                </h3>
            </div>
            <div className="card-body">
                <table className="table table-hover table-bordered">
                <thead>
                <tr>
                    <th scope="col"></th>
                    <th scope="col">id user</th>
                    <th scope="col">user name</th>
                    <th scope="col">user last name</th>
                    <th scope="col">module name</th>
                    <th scope="col">value</th>
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
