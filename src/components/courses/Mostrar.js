import React, { Component } from "react";
import NavigationBar from "./../nav-bar/NavigationBar";
import { Consumer } from "./../../Context";
import "./Mostrar.css";

class Mostrar extends Component {
  constructor() {
    super();
    this.eliminar = this.eliminar.bind(this);
    this.navigateCoursesUsersMostrar = this.navigateCoursesUsersMostrar.bind(
      this
    );
    this.navigateInscribirUsers = this.navigateInscribirUsers.bind(this);
  }

  navigateCoursesUsersMostrar(course) {
    this.props.history.push({
      pathname: "/inscriptions-mostrar-detalle",
      course: course
    });
  }

  navigateInscribirUsers(props, course) {
    this.props.history.push({
      pathname: "/inscriptions-crear-users",
      course: course
    });
  }

  eliminar(props, _id) {
    let coursesUsers = props.coursesUsers.filter((element, index) => {
      return element.course_id === _id;
    });
    let coursesModules = props.coursesModules.filter((element, index) => {
      return element.course_id === _id;
    });
    if (coursesUsers.length === 0 && coursesModules.length === 0) {
      let courses = props.courses.filter((element, index) => {
        return element._id !== _id;
      });
      props.updateCourses(courses);
      alert("deleted successfully");
    } else {
      alert("course has relations");
    }
  }

  render() {
    return (
      <div>
        <NavigationBar></NavigationBar>
        <div align="center">
          <div className="card card-courses">
            <div className="card-header">
              <h3 align="center">Cursos</h3>
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
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  {/*rows*/}
                  <Consumer>
                    {props => {
                      return props.courses.map((course, i) => {
                        let _id = course._id;
                        return (
                          <tr key={course._id}>
                            <td scope="col">
                              <input type="checkbox"></input>
                            </td>
                            <td scope="col">{course._id}</td>
                            <td scope="col">{course.name}</td>
                            <td scope="col">
                              <button
                                className="btn btn-success"
                                onClick={this.navigateInscribirUsers.bind(
                                  this,
                                  props,
                                  course
                                )}
                              >
                                Inscribir
                              </button>
                            </td>
                            <td scope="col">
                              <button
                                onClick={this.navigateCoursesUsersMostrar.bind(
                                  this,
                                  course
                                )}
                                className="btn btn-info"
                              >
                                Detalle
                              </button>
                            </td>
                            <td scope="col">
                              {" "}
                              <button className="btn btn-warning">
                                Editar
                              </button>{" "}
                            </td>
                            <td scope="col">
                              <button
                                onClick={this.eliminar.bind(
                                  this,
                                  props,
                                  course._id
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
