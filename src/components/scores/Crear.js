import React, { Component } from "react";
import ReactDOM from "react-dom";
import NavigationBar from "./../nav-bar/NavigationBar";
import { Consumer } from "./../../Context";
import "./Crear.css";

class Crear extends Component {
  constructor(props) {
    super(props);
    this.addNota = this.addNota.bind(this);
  }

  addNota(props, data) {
    let last = props.scores[props.scores.length - 1];
    let id = (parseInt(last._id) + 1).toString();
    let value = ReactDOM.findDOMNode(this.refs.score).value.trim();
    let newScore = {
      _id: id,
      user_id: data.user._id,
      module_id: data.module._id,
      value: value
    };
    let scoreExist = false;
    props.scores.forEach(function(score, index) {
      let band1 = score.module_id == data.module._id;
      let band2 = score.user_id == data.user._id;
      if (band1 && band2) {
        scoreExist = true;
        score.value = value;
      }
    });
    if (!scoreExist) {
      props.scores.push(newScore);
    }
    alert("successfully");
    this.props.history.push({
      pathname: "/scores-mostrar-users",
      data: data
    });
  }

  render() {
    return (
      <div>
        <NavigationBar></NavigationBar>
        <div className="container col-md-3">
          <div className="card">
            <div className="card-header">
              <h3 align="center">Notas</h3>
            </div>
            <div className="card-body">
              <form action="">
                <div className="form-group">
                  <label>Valor</label>
                  <input
                    type="text"
                    className="form-control"
                    minLength="3"
                    maxLength="24"
                    ref="score"
                  ></input>
                </div>
                <div className="text-center">
                  <Consumer>
                    {props => {
                      return (
                        <button
                          onClick={this.addNota.bind(
                            this,
                            props,
                            this.props.location.data
                          )}
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
