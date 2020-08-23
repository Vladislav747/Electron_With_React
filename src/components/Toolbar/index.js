import React, { Component } from 'react';

import './Toolbar.css';



class Toolbar extends Component {
    render() {
        return (
        <nav className="toolbar">
            <ul className="nav flex-column">
                <li className="nav-item">
                    <a className="nav-link active" href="/edit">
                        Редактирование
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/view">
                        Просмотр
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/about">
                        О программе
                    </a>
                </li>
            </ul>
        </nav>
        );
    }
}

export default Toolbar;
