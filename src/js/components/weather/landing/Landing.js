import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Landing extends Component {
    render() {
        return (
            <div>
                <h2>Bike or Metro?</h2>
                <Link to="/temperature">
                    <button className="sequence-button">Start</button>
                </Link>
            </div>
        );
    }
}

export default Landing;