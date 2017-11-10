import React, { Component } from 'react';

import { Link } from 'react-router-dom'

import { weatherStore } from 'js/components/weather/WeatherStore';
import { weatherActions } from 'js/components/weather/WeatherActions';

class Result extends Component {
    constructor(props) {
        super(props);
        this.state = weatherStore.getState();
    }

    componentDidMount() {
        weatherActions.atResult(true);
    }
    
    componentWillUnmount() {
        weatherActions.atResult(false);
    }
    

    render() {
        return (
            <div>
                {this.state.shouldBike ? <h2>Ride your bike!</h2> : <h2>Take the metro</h2>}
                <Link to="/prefs/rain-intensity"><button className="sequence-button">Back</button></Link>
            </div>
        );
    }
}

export default Result;