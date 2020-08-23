import React, { Component } from 'react';

import './View.css';
import ViewElement from '../ViewElement'
var loginUsers = require ('../../data/loginUsers.js');



class View extends Component {
    
    state = {
        loginUsers: loginUsers,
    };

    render() {
        return (
        <div className="workarea">
            <div className="view">
                {this.state.loginUsers.map(user =>
                    <ViewElement
                        key={user.login}
                        user={user}
                    />
                )}
           </div>
        </div>
        );
    }
}

export default View;
