import React, { Component } from 'react';
import { users } from './../../mock-data/users.json';
import NavigationBar from './../nav-bar/NavigationBar';
import './Mostrar.css';

class Mostrar extends Component{
    constructor(){
        super();
        this.state = {
            users
        }
       this.eliminar = this.eliminar.bind(this);
    }

    eliminar(_id) {
        /*for (var i = 0; i < this.state.users.length; i+=1) {
            if(this.state.users[i]._id == _id){
                let index = this.state.users.indexOf(_id);
                this.state.users = this.state.users.splice(index, 1);
            }
        }*/
        this.setState({
            users: this.state.users.filter((element, index) => {
                return element._id != _id;
            })

        })
        alert("deleted successfully");
      }

    render() {
        const rows = this.state.users.map((user, i) => {
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
                <td scope="col"> <button onClick={this.eliminar.bind(this, _id)} className="btn btn-danger">Eliminar</button> </td>
            </tr>
            )
        })
        return (
<div>
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
