import React, { Component } from 'react';

import './Editing.css';
var loginUsers = require ('../../data/loginUsers.js');



class Editing extends Component {
    
    state = {
        loginUsers: loginUsers[0],
        login: loginUsers.login,
        password: loginUsers.password,
    };

    componentDidMount() {
        const postID = this.props.match;
        console.log(postID, "url");
    }

    handleChange(){

    }

    render() {
        return (
        <div className="workarea">
            <div className="editing">
                <h1>Редактировать</h1>
             
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Логин</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp" 
                            value={this.state.loginUsers.login}
                            onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Пароль</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="exampleInputPassword1" 
                            value={this.state.loginUsers.password}/>
                    </div>
                    <button type="submit" className="btn btn-primary">Редактировать</button>
                </form>
           </div>
        </div>
        );
    }
}

export default Editing;
