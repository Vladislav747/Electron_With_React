import React, { Component } from 'react';

import {Workarea, Toolbar} from '../../components';
import './Home.css';



class Home extends Component {
    render() {
        return (
        <main className="main">
            <Toolbar />
            <Workarea />
        </main>
        );
    }
}

export default Home;
