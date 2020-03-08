import React, { Component } from 'react';
import { users } from './../../mock-data/users.json';
import NavigationBar from './../nav-bar/NavigationBar';
import './Mostrar.css';
import { Consumer } from './../../Context'

class CrearInsUsers extends Component{
    constructor(props){
        super(props);
        this.state = {
            arrayUsers: []
        }
        this.inscribir = this.inscribir.bind(this);
    }

    inscribir(props, user_id, course_id) {
        let last = props.coursesUsers[props.coursesUsers.length - 1]
        let id = (parseInt(last._id) + 1).toString();
        let newInscription = {
            _id: id,
            course_id: course_id,
            user_id: user_id,
        };
        props.coursesUsers.push(newInscription);
        this.setState(() => {
            return { arrayUsers: []};
        });
        alert("inscription successfully");
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
                        Usuarios
                    </h4>
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
                            </tr>
                        </thead>
                        <tbody> 
                            <Consumer>  
                            {
                            props => {
                                let course_id = this.props.location.course._id;
                                for (var i = 0; i < props.users.length; i+=1) {
                                    let bandera = true;
                                    let user = props.users[i];
                                    for (var j = 0; j < props.coursesUsers.length; j+=1) {
                                        let inscription = props.coursesUsers[j];
                                        let courseExist =  course_id === inscription.course_id;
                                        let userExist = user._id == inscription.user_id;
                                        if(courseExist && userExist){
                                                bandera = false;
                                                break;
                                        } 
                                    }
                                    if(bandera){
                                        this.state.arrayUsers.push(user);
                                    }
                                }
                                return this.state.arrayUsers.map((user, i) => {
                                    let user_id = user._id;
                                    let course_id = this.props.location.course._id;
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
                                            <td scope="col"> 
                                                <button
                                                    onClick={this.inscribir.bind(this, props, user_id, course_id)}
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
        </div> )
    }
}
export default CrearInsUsers;
