import React, { Component } from "react";
import NavigationBar from "./../nav-bar/NavigationBar";
import { Consumer } from "./../../Context";
import "./Mostrar.css";

class Mostrar extends Component {
  constructor(props) {
    super(props);
    //let course = props.course
    this.eliminar = this.eliminar.bind(this);
  }

  eliminar(props, _id) {
    let courseUsers = props.coursesUsers.filter((element, index) => {
      return element.user_id !== _id;
    });
    props.updateCourseUsers(courseUsers);
    alert("deleted successfully");
  }

  render() {
    return (
      <div>
        <NavigationBar></NavigationBar>
        <div align="center">
          <div className="card card-users">
            <div className="card-header">
              <h3 align="center">{this.props.location.course.name}</h3>
              <h4 align="center">Usuarios Inscritos</h4>
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
                    {props => {
                      let coursesUsersSpecific = props.coursesUsers.filter(
                        (element, index) => {
                          return (
                            this.props.location.course._id === element.course_id
                          );
                        }
                      );
                      let usersSpecific = [];
                      coursesUsersSpecific.forEach(function(
                        elementCourseUser,
                        index
                      ) {
                        let user = props.users.find(
                          elementUser =>
                            elementUser._id === elementCourseUser.user_id
                        );
                        usersSpecific.push(user);
                      });
                      return usersSpecific.map((user, i) => {
                        let _id = user._id;
                        return (
                          <tr key={user._id}>
                            <td scope="col">
                              <input type="checkbox"></input>
                            </td>
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
                                onClick={this.eliminar.bind(
                                  this,
                                  props,
                                  user._id
                                )}
                                className="btn btn-danger"
                              >
                                Eliminar
                              </button>
                            </td>
                          </tr>
                        );
                      });
                    }}
                  </Consumer>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Mostrar;
