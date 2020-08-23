import React, { Component } from 'react';

import './ViewElement.css';

class ViewElement extends Component {

    render() {
        const { user } = this.props;
        return (
        <div class="card view__element">
            <div class="card-body">
                <h5 class="card-title">{user.login}</h5>
            </div>
        </div>
        );
    }
}

export default ViewElement;
