import React, { Component } from 'react';
import { users } from './../../mock-data/users.json';
import NavigationBar from './../nav-bar/NavigationBar';
import './Mostrar.css';

import { Consumer } from './../../Context'

class Mostrar extends Component{
    constructor(){
        super();
        this.state = {
            users
        }
       this.eliminar = this.eliminar.bind(this);
    }

    eliminar(props, _id) {
        let users = props.users.filter((element, index) => {
            return element._id !== _id;
        })
        props.updateUsers(users)
        alert("deleted successfully");
    }

    render() {
        return ( <div>
        <NavigationBar></NavigationBar>
        <div align="center">
            <div className="card card-users">
                <div className="card-header">
                    <h3 align="center">
                        Usuarios
                    </h3>
                </div>
                <div className="card-body">
                    <table className="table table-hover table-bordered">
                        <thead>
                            <tr>
                                <th scope="col"></th>
                                <th scope="col">_id</th>
                                <th scope="col">nick name</th>
                                <th scope="col">password</th>
                                <th scope="col">name</th>
                                <th scope="col">last name</th>
                                <th scope="col">career</th>
                                <th scope="col">email</th>
                                <th scope="col">type</th>
                                <th scope="col"></th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody> 
                            <Consumer>  
                            {
                            props => {
                                return props.users.map((user, i) => {
                                    let _id = user._id;
                                    return (
                                        <tr key={user._id}>
                                            <td scope="col"><input type="checkbox"></input></td>
                                            <td scope="col">{user._id}</td>
                                            <td scope="col">{user.nick_name}</td>
                                            <td scope="col">{user.password}</td>
                                            <td scope="col">{user.name}</td>
                                            <td scope="col">{user.last_name}</td>
                                            <td scope="col">{user.career}</td>
                                            <td scope="col">{user.email}</td>
                                            <td scope="col">{user.type}</td>
                                            <td scope="col"> <button className="btn btn-warning">Editar</button> </td>
                                            <td scope="col"> 
                                                <button
                                                    onClick={this.eliminar.bind(this, props, user._id)}
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
export default Mostrar;
