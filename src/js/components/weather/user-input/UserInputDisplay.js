import React, { Component } from 'react';

import './UserInputDisplay.scss'

class UserInputDisplay extends Component {
    render() {
        return (
            <div className="user-input-display">
                <h3 className="input-name">{this.props.name}</h3>
                <div className="input-value">{this.props.value}</div>
                {this.props.children}
            </div>
        );
    }
}

export default UserInputDisplay;