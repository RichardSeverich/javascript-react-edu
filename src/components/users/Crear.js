// React
import React, { Component } from "react";
import ReactDOM from "react-dom";

// Components
import NavigationBar from "./../nav-bar/NavigationBar";
import "./Crear.css";
import { Consumer } from "./../../Context";

class Crear extends Component {
  constructor(props) {
    super(props);
    this.createUser = this.createUser.bind(this);
  }

  createUser(users) {
    // Find the text field via the React ref
    let id = ReactDOM.findDOMNode(this.refs.id).value.trim();
    let nickname = ReactDOM.findDOMNode(this.refs.nickname).value.trim();
    let password = ReactDOM.findDOMNode(this.refs.password).value.trim();
    let name = ReactDOM.findDOMNode(this.refs.name).value.trim();
    let lastName = ReactDOM.findDOMNode(this.refs.lastName).value.trim();
    let career = ReactDOM.findDOMNode(this.refs.career).value.trim();
    let email = ReactDOM.findDOMNode(this.refs.email).value.trim();
    let type = ReactDOM.findDOMNode(this.refs.type).value.trim();
    let user = {
      _id: id,
      nick_name: nickname,
      password: password,
      name: name,
      last_name: lastName,
      career: career,
      email: email,
      type: type
    };
    users.push(user);
    alert("created successfully");
    //Clear Inputs
    ReactDOM.findDOMNode(this.refs.id).value = "";
    ReactDOM.findDOMNode(this.refs.nickname).value = "";
    ReactDOM.findDOMNode(this.refs.password).value = "";
    ReactDOM.findDOMNode(this.refs.name).value = "";
    ReactDOM.findDOMNode(this.refs.lastName).value = "";
    ReactDOM.findDOMNode(this.refs.email).value = "";
  }

  render() {
    return (
      <div>
        <NavigationBar></NavigationBar>
        <div className="container col-md-3">
          <div className="card">
            <div className="card-header">
              <h3 align="center">Usuarios</h3>
            </div>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label>Id</label>
                  <input
                    ref="id"
                    type="text"
                    className="form-control"
                    maxLength="7"
                  ></input>
                </div>
                <div className="form-group">
                  <label>nickname</label>
                  <input
                    ref="nickname"
                    className="form-control"
                    minLength="3"
                    maxLength="10"
                  ></input>
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    ref="password"
                    suggested="mypass123"
                    type="password"
                    className="form-control"
                    minLength="3"
                    maxLength="10"
                  ></input>
                </div>
                <div className="form-group">
                  <label>Names</label>
                  <input
                    ref="name"
                    type="text"
                    className="form-control"
                    minLength="3"
                    maxLength="24"
                  ></input>
                </div>
                <div className="form-group">
                  <label>Last Names</label>
                  <input
                    ref="lastName"
                    type="text"
                    className="form-control"
                    minLength="3"
                    maxLength="24"
                  ></input>
                </div>
                <div className="form-group">
                  <div className="label">
                    <label>Career</label>
                  </div>
                  <select
                    ref="career"
                    className="custom-select custom-select-sm"
                  >
                    <option value="System enginee">System engineer</option>
                    <option value="Civil engineer">Civil engineer</option>
                    <option value="Electronic engineer">
                      Electronic engineer
                    </option>
                    <option value="Finance engineer">Finance engineer</option>
                    <option value="Economy">Commercial Engineer</option>
                    <option value="Business administrato">
                      Business administrator
                    </option>
                    <option value="Architecture">Architecture</option>
                    <option value="Developer">Developer</option>
                    <option value="Economy">Economy</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    ref="email"
                    type="text"
                    className="form-control"
                    maxLength="32"
                  ></input>
                </div>
                <div className="form-group">
                  <label>Type</label>
                  <select ref="type" className="custom-select custom-select-sm">
                    <option value="Admin">Admin</option>
                    <option value="Student">Student</option>
                    <option value="Proffesor">Professor</option>
                    <option value="Trainer">Trainer</option>
                    <option value="Engineer">Engineer</option>
                  </select>
                </div>
                <div className="text-center">
                  <Consumer>
                    {props => {
                      return (
                        <button
                          onClick={this.createUser.bind(this, props.users)}
                          type="button"
                          className="btn btn-success"
                        >
                          Registrar
                        </button>
                      );
                    }}
                  </Consumer>
                  <button className="btn btn-info Boton-cancelar">
                    Cancelar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Crear;
