import React, { Component } from 'react';

import './Editing.css';
var loginUsers = require ('../../data/loginUsers.js');

import addIcon from '../../assets/icons/add.svg';
import saveIcon from '../../assets/icons/save.svg';
import deleteIcon from '../../assets/icons/delete.svg';

class Editing extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loginUsers: loginUsers[0],
            login: loginUsers.login,
            password: loginUsers.password,
        };
    }

    componentDidMount() {
       this.renderRedirect();
       
    }

    renderRedirect = () => {
        TODO: //Если не передан параметр перекидывать обратно на главную страницу
        if (this.props.match.params) {
            const postID = this.props.match.params;
            console.log(postID, "url"); 
        }
      };

    handleChange(){

    }

    render() {
        return (
        <div className="workarea">
            <div className="editing">
                <h1>Редактировать</h1>
             
                <form>
                    <div className="form-group">
                        <label htmlFor="inputLogin">Логин</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="inputLogin"
                            aria-describedby="emailHelp" 
                            value={this.state.loginUsers.login}
                            onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputPassword">Пароль</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="inputPassword" 
                            value={this.state.loginUsers.password}/>
                    </div>
                    <div className="extra-attributes"></div>
                    <div className="form-controls">
                        <button type="submit" className="btn btn-primary icon-control add-action">
                            <img src={addIcon} width="30px" alt="Добавить"/>
                        </button>
                        <button type="submit" className="btn btn-primary icon-control save-action">
                            <img src={saveIcon} width="30px" alt="Сохранить"/>
                        </button>
                        <button type="submit" className="btn btn-primary icon-control delete-action">
                            <img src={deleteIcon} width="30px" alt="Удалить"/>
                        </button>
                    </div>
                   
                </form>
           </div>
        </div>
        );
    }
}

export default Editing;
