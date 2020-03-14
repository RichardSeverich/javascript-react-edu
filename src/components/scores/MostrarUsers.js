import React, { Component } from 'react';
import NavigationBar from './../nav-bar/NavigationBar';
import './Mostrar.css';
import { Consumer } from './../../Context'

class MostrarUsers extends Component{
    constructor(props){
        super(props);
    }

    render() {
        return ( <div>
        <NavigationBar></NavigationBar>
        <div align="center">
            <div className="card card-users">
                <div className="card-header">
                    <h3 align="center">
                        Curso: {this.props.location.data.course.name}
                    </h3>
                    <h4 align="center">
                        Modulo: {this.props.location.data.module.name}
                    </h4>
                    <h4 align="center">
                        Notas
                    </h4>
                </div>
                <div className="card-body">
                    <table className="table table-hover table-bordered">
                        <thead>
                            <tr>
                                <th scope="col"></th>
                                <th scope="col">score</th>
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
                            <Consumer>
                            {
                            props => {
                                let scoreSpecific = props.scores.filter((element, index) => {
                                    return this.props.location.data.module._id == element.module_id;
                                });
                                let userSpecific = [];
                                scoreSpecific.forEach(function (elementScore, index) {
                                    let user =  props.users.find(elementModule => elementModule._id == elementScore.user_id);
                                    user.score = elementScore.value;
                                    userSpecific.push(user);
                                });
                                return userSpecific.map((user, i) => {
                                    let _id = user._id;
                                    return (
                                        <tr key={user._id}>
                                            <td scope="col"><input type="checkbox"></input></td>
                                            <td scope="col">{user.score}</td>
                                            <td scope="col">{user._id}</td>
                                            <td scope="col">{user.nick_name}</td>
                                            <td scope="col">{user.password}</td>
                                            <td scope="col">{user.name}</td>
                                            <td scope="col">{user.last_name}</td>
                                            <td scope="col">{user.career}</td>
                                            <td scope="col">{user.email}</td>
                                            <td scope="col">{user.type}</td>
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
export default MostrarUsers;
