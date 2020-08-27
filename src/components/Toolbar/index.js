import React, { Component } from 'react';
import {HashRouter, Link} from "react-router-dom";

import './Toolbar.css';

class Toolbar extends Component {
    render() {
        return (
        <nav className="toolbar">
            <ul className="nav flex-column">
            <HashRouter>
                <li className="nav-item">
                    <Link to="/edit">
                        Редактирование
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/view">
                        Просмотр
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to={"/about"}>
                        О программе
                    </Link>
                </li>
                </HashRouter>
            </ul>
        </nav>
        );
    }
}

export default Toolbar;
