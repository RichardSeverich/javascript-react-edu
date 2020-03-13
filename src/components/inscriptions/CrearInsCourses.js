import React, { Component } from 'react';
import { courses } from './../../mock-data/courses.json';
import NavigationBar from './../nav-bar/NavigationBar';
import './Mostrar.css';
import { Consumer } from './../../Context'

class CrearInsCourses extends Component{
    constructor(){
        super();
        this.navigateInscribirUsers = this.navigateInscribirUsers.bind(this);
    }

    navigateInscribirUsers(props, course) {
        this.props.history.push({
            pathname : '/inscriptions-crear-users',
            course:course
        });
    }

    render() {
        return (
<div>
    <NavigationBar></NavigationBar>
    <div align="center">
        <div className="card card-courses">
            <div className="card-header">
                <h3 align="center">
                    Seleccione un Curso
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
                </tr>
                </thead>
                <tbody>
                {/*rows*/}
                <Consumer>
                    {
                        props => {
                            return props.courses.map((course, i) => {
                                let _id = course._id;
                                return (
                                    <tr key={course._id}>
                                        <td scope="col"><input type="checkbox"></input></td>
                                        <td scope="col">{course._id}</td>
                                        <td scope="col">{course.name}</td>
                                        <td scope="col"> 
                                            <button
                                                onClick={this.navigateInscribirUsers.bind(this, props, course)}
                                                className="btn btn-success">
                                                inscribir
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
export default CrearInsCourses;
