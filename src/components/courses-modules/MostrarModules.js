import React, { Component } from 'react';
import NavigationBar from './../nav-bar/NavigationBar';
import './Mostrar.css';
import { Consumer } from './../../Context'

class MostrarModules extends Component{
    constructor(props){
        super(props);
        //let course = props.course
        this.eliminar = this.eliminar.bind(this);
    }

    eliminar(props, _id) {
        let coursesModules = props.coursesModules.filter((element, index) => {
            return element.module_id !== _id;
        })
        props.updateCourseModules(coursesModules);
        alert("deleted successfully");
    }

    render() {
        return ( <div>
        <NavigationBar></NavigationBar>
        <div align="center">
            <div className="card card-users">
                <div className="card-header">
                    <h3 align="center">
                        {this.props.location.course.name}
                    </h3>
                    <h4 align="center">
                        Modulos
                    </h4>
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
                            <Consumer>
                            {
                            props => {
                                let coursesModulesSpecific = props.coursesModules.filter((element, index) => {
                                    return this.props.location.course._id == element.course_id;
                                });
                                let modulesSpecific = [];
                                coursesModulesSpecific.forEach(function (elementCourseModule, index) {
                                    let module =  props.modules.find(elementModule => elementModule._id == elementCourseModule.module_id);
                                    modulesSpecific.push(module);
                                });
                                return modulesSpecific.map((module, i) => {
                                    let _id = module._id;
                                    return (
                                        <tr key={module._id}>
                                            <td scope="col"><input type="checkbox"></input></td>
                                            <td scope="col">{module._id}</td>
                                            <td scope="col">{module.name}</td>
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
        </div> )
    }
}
export default MostrarModules;
