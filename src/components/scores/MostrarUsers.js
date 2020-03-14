import React, { Component } from "react";
import NavigationBar from "./../nav-bar/NavigationBar";
import "./Mostrar.css";
import { Consumer } from "./../../Context";

class MostrarUsers extends Component {
  constructor(props) {
    super(props);
    this.navigateCrear = this.navigateCrear.bind(this);
  }

  navigateCrear(props, data) {
    this.props.history.push({
      pathname: "/scores-crear",
      data: data
    });
  }

  render() {
    return (
      <div>
        <NavigationBar></NavigationBar>
        <div align="center">
          <div className="card card-users">
            <div className="card-header">
              <h3 align="center">{this.props.location.data.course.name}</h3>
              <h4 align="center">{this.props.location.data.module.name}</h4>
              <h4 align="center">Notas</h4>
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
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  <Consumer>
                    {props => {
                      // declare course and module
                      let course = this.props.location.data.course;
                      let module = this.props.location.data.module;
                      // search specific scores (Module User relation )
                      let scoreSpecific = props.scores.filter(
                        (element, index) => {
                          return module._id == element.module_id;
                        }
                      );
                      // search specific courseUsers relation
                      let coursesUsersSpecific = props.coursesUsers.filter(
                        (element, index) => {
                          return course._id == element.course_id;
                        }
                      );
                      // search specific users inscritos and verify if they have already score.
                      let usersSpecific = [];
                      coursesUsersSpecific.forEach(function(
                        elementCourseUser,
                        index
                      ) {
                        let userInscrito = props.users.find(
                          elementUser =>
                            elementUser._id == elementCourseUser.user_id
                        );
                        userInscrito.score = "0";
                        let score = scoreSpecific.find(
                          score => score.user_id == userInscrito._id
                        );
                        if (score != undefined) {
                          userInscrito.score = score.value;
                        }
                        usersSpecific.push(userInscrito);
                      });
                      return usersSpecific.map((user, i) => {
                        let data = {};
                        data.user = user;
                        data.course = course;
                        data.module = module;
                        return (
                          <tr key={user._id}>
                            <td scope="col">
                              <input type="checkbox"></input>
                            </td>
                            <td scope="col">{user.score}</td>
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
                                onClick={this.navigateCrear.bind(
                                  this,
                                  props,
                                  data
                                )}
                                className="btn btn-success"
                              >
                                Nota
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
export default MostrarUsers;
