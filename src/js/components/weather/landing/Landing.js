import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Landing extends Component {
    render() {
        return (
            <div>
                <h2>Bike or metro?</h2>
          <p>Not sure if you should bike to work today? Tell us your weather preferences and we will make a decision for you!</p>
                <Link to="/prefs/temperature">
                    <button className="sequence-button">Start</button>
                </Link>
            </div>
        );
    }
}

export default Landing;