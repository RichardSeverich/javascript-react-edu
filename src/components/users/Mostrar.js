import React, { Component } from 'react';
import { users } from './../../mock-data/users.json';
import NavigationBar from './../nav-bar/NavigationBar';

class Mostrar extends Component{
    constructor(){
        super();
        this.state = {
            users
        }
    }
    render() {
        const rows = this.state.users.map((user, i) => {
            return (
            <tr key={user._id}>
                <td><input type="checkbox"></input></td>
                <td>{user._id}</td>
                <td>{user.nick_name}</td>
                <td>{user.password}</td>
                <td>{user.name}</td>
                <td>{user.last_name}</td>
                <td>{user.career}</td>
                <td>{user.email}</td>
                <td>{user.type}</td>
                <td> <button className="btn btn-warning">Editar</button> </td>
                <td> <button className="btn btn-danger">Eliminar</button> </td>
            </tr>
            )
        })
        return (
            <div>
            <NavigationBar></NavigationBar>
            <table className="table table-hover">
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
              </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
          </table>
          </div>
        )
    }
}
export default Mostrar;
