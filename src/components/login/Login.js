// React
import React, { Component } from "react";
import ReactDOM from "react-dom";
// Others
import { Consumer } from "./../../Context";
import Logo from "./../logo/Logo";
import "./Login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.navigateNavbar = this.navigateNavbar.bind(this);
  }
  navigateNavbar(users) {
    // Find the text field via the React ref
    let nickname = ReactDOM.findDOMNode(this.refs.nickname).value.trim();
    let password = ReactDOM.findDOMNode(this.refs.password).value.trim();
    let band = false;
    users.forEach(function(user, indice, array) {
      let bandOne = user._id == nickname && user.password == password;
      let bandTwo = user.nick_name == nickname && user.password == password;
      if (bandOne || bandTwo) {
        band = true;
        //break;
      }
    });
    if (band) {
      this.props.history.push("/nav-bar");
    } else {
      alert("user or password incorrect");
    }
  }
  render() {
    return (
      <div>
        <div className="Login-header">
          <Logo></Logo>
        </div>
        <div className="container col-md-3">
          <div className="card">
            <div className="card-header">
              <h3>Iniciar sesion</h3>
            </div>
            <div className="card-body">
              <form action="">
                <div className="form-group">
                  <label>Username</label>
                  <input
                    ref="nickname"
                    type="text"
                    className="form-control username"
                    minLength="3"
                    maxLength="10"
                  ></input>
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    ref="password"
                    type="password"
                    className="form-control"
                    minLength="3"
                    maxLength="10"
                  ></input>
                </div>
                <div className="text-center">
                  <Consumer>
                    {props => {
                      return (
                        <button
                          onClick={this.navigateNavbar.bind(this, props.users)}
                          type="button"
                          style={{ marginLeft: "24px" }}
                          className="btn btn-info"
                        >
                          Ingresar
                        </button>
                      );
                    }}
                  </Consumer>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
