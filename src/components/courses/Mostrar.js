import React, { Component } from 'react';
import { courses } from './../../mock-data/courses.json';
import NavigationBar from './../nav-bar/NavigationBar';
import './Mostrar.css';

class Mostrar extends Component{
    constructor(){
        super();
        this.state = {
            courses
        }
    }
    render() {
        const rows = this.state.courses.map((course, i) => {
            return (
            <tr key={course._id}>
                <td scope="col"><input type="checkbox"></input></td>
                <td scope="col">{course._id}</td>
                <td scope="col">{course.name}</td>
                <td scope="col"> <button className="btn btn-info">Detalle</button> </td>
                <td scope="col"> <button className="btn btn-warning">Editar</button> </td>
                <td scope="col"> <button className="btn btn-danger">Eliminar</button> </td>
            </tr>
            )
        })
        return (
<div>
    <NavigationBar></NavigationBar>
    <div align="center">
        <div className="card card-courses">
            <div className="card-header">
                <h3 align="center">
                    Cursos
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
