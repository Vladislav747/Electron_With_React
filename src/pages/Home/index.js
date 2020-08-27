import React, { Component } from 'react';

import {Editing, Toolbar} from '../../components';
import './Home.css';



class Home extends Component {
    render() {
        return (
        <div className="main">
            <Toolbar />
            <Editing />
        </div>
        );
    }
}

export default Home;
