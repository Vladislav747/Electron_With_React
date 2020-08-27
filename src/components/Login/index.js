import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';

import './Login.css';

var ProgressBarStyles = {
    width: '10%'
}  

class Login extends Component {

    enter(){
        console.log("check");
        localStorage.setItem('isAuth', true);

    }

    render() {
        return (
       
            <div className="login-form">
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Логин</label>
                        <input 
                            type="email" 
                            className="form-control" 
                            id="exampleInputEmail1" 
                            aria-describedby="emailHelp"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Пароль</label>
                        <input 
                            type="password" 
                            className="form-control" 
                            id="exampleInputPassword1" />
                    </div>
                    <button 
                        type="submit" 
                        className="btn btn-primary"
                        id="btn-click"
                        onClick={this.enter}>Войти</button>
                </form>
                <div className="progress">
                    <div 
                        className="progress-bar progress-bar-striped" 
                        role="progressbar" 
                        style={ProgressBarStyles} 
                        aria-valuenow="10" 
                        aria-valuemin="0" 
                        aria-valuemax="100">
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
