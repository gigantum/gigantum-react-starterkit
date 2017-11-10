import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { weatherStore } from 'js/components/weather/WeatherStore';

import UserInputDisplay from 'js/components/weather/user-input/UserInputDisplay';
import MaxChanceOfRain from 'js/components/weather/user-input/chance-of-rain/MaxChanceOfRain';

class ChanceOfRain extends Component {
    constructor(props) {
        super(props);
        this.state = weatherStore.getState();
        this.handleSlide = this.handleSlide.bind(this);
    }

    handleSlide(max) {
        this.setState({ maxChanceOfRain: max })
    }
    
    render() {
        return (
            <div className="sequence-input">
                <p>What chance of rain would you put up with?</p>
                <div className="display">
                    <UserInputDisplay name="Max chance of rain" value={`${this.state.maxChanceOfRain}%`} />
                </div>
                <div className="slider">
                    <MaxChanceOfRain value={this.state.maxChanceOfRain} handleSlide={this.handleSlide}/>
                </div>
                <Link to="/prefs/temperature"><button className="sequence-button">Back</button></Link>
                <Link to="/prefs/rain-intensity"><button className="sequence-button">Next</button></Link>
            </div>
        );
    }
}

export default ChanceOfRain;