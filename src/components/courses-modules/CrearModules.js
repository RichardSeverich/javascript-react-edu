import React, { Component } from "react";
import NavigationBar from "./../nav-bar/NavigationBar";
import { Consumer } from "./../../Context";
import "./Mostrar.css";

class CrearInsUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrayModules: []
    };
    this.inscribir = this.inscribir.bind(this);
  }

  inscribir(props, module_id, course_id) {
    let last = props.coursesUsers[props.coursesUsers.length - 1];
    let id = (parseInt(last._id) + 1).toString();
    let newInscription = {
      _id: id,
      course_id: course_id,
      module_id: module_id
    };
    props.coursesModules.push(newInscription);
    this.setState(() => {
      return { arrayModules: [] };
    });
    alert("inscription successfully");
  }

  render() {
    return (
      <div>
        <NavigationBar></NavigationBar>
        <div align="center">
          <div className="card card-users">
            <div className="card-header">
              <h3 align="center">{this.props.location.course.name}</h3>
              <h4 align="center">Modulos</h4>
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
                    {props => {
                      let course_id = this.props.location.course._id;
                      for (var i = 0; i < props.modules.length; i += 1) {
                        let bandera = true;
                        let module = props.modules[i];
                        for (
                          var j = 0;
                          j < props.coursesModules.length;
                          j += 1
                        ) {
                          let courseModule = props.coursesModules[j];
                          let courseExist =
                            course_id === courseModule.course_id;
                          let moduleExist =
                            module._id == courseModule.module_id;
                          if (courseExist && moduleExist) {
                            bandera = false;
                            break;
                          }
                        }
                        if (bandera) {
                          this.state.arrayModules.push(module);
                        }
                      }
                      return this.state.arrayModules.map((module, i) => {
                        let module_id = module._id;
                        let course_id = this.props.location.course._id;
                        return (
                          <tr key={module._id}>
                            <td scope="col">
                              <input type="checkbox"></input>
                            </td>
                            <td scope="col">{module._id}</td>
                            <td scope="col">{module.name}</td>
                            <td scope="col">
                              <button
                                onClick={this.inscribir.bind(
                                  this,
                                  props,
                                  module_id,
                                  course_id
                                )}
                                className="btn btn-success"
                              >
                                inscribir
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
export default CrearInsUsers;
