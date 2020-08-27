import React, { Component } from 'react';
import {Link} from "react-router-dom";

import './ViewElement.css';

class ViewElement extends Component {

    render() {
        const { user } = this.props;
        return (
            <Link to={`/edit/${user.id}`} activeClassName="active">
                <div class="card view__element">
                    <div class="card-body">
                        <p class="card-title">{user.login}</p>
                    </div>
                </div>
            </Link>
        
        );
    }
}

export default ViewElement;
