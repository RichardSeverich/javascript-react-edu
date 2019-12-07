import React, { Component } from 'react';

class Login extends Component{
    navigateNavbar() {
       
    }
    render() {
        return (
            <div className="container col-md-3">
                <div className="card">
                    <div className="card-header">
                        <h3 align="center">
                            Iniciar sesion
                        </h3>
                    </div>
                    <div className="card-body">
                        <form action="">
                            <div className="form-group">
                                <label >Username</label>
                                    <input type="text" className="form-control username" minLength="7"  maxLength="7">
                                    </input>
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" className="form-control" minLength="3" maxLength="10">
                                    </input>
                                </div>
                                <div className="text-center">
                                    <button onClick={this.navigateNavbar} className="btn btn-info" style={{marginLeft: "24px"}}>Ingresar</button>
                                </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default Login;
