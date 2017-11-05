import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { weatherStore } from 'js/components/weather/WeatherStore';

import UserInputDisplay from 'js/components/weather/user-input/UserInputDisplay';
import MaxChanceOfRain from 'js/components/weather/user-input/rain/MaxChanceOfRain';

class Rain extends Component {
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
                <div className="display">
                    <UserInputDisplay name="Max chance of rain" value={this.state.maxChanceOfRain}>
                    </UserInputDisplay>
                </div>
                <div className="slider">
                    <MaxChanceOfRain value={this.state.maxChanceOfRain} handleSlide={this.handleSlide}/>
                </div>
                <Link to="/result"><button>Okay!</button></Link>
            </div>
        );
    }
}

export default Rain;