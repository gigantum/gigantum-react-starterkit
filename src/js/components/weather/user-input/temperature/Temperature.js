import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { weatherStore } from 'js/components/weather/WeatherStore';

import UserInputDisplay from 'js/components/weather/user-input/UserInputDisplay';
import TemperatureRange from 'js/components/weather/user-input/temperature/TemperatureRange';

import 'js/components/weather/user-input/SequenceInput.scss'

class Temperature extends Component {
    constructor(props) {
        super(props);
        this.state = weatherStore.getState();
        this.handleSlide = this.handleSlide.bind(this);
    }

    handleSlide(range) {
        this.setState({ temperatureRange: range })
    }

    render() {
        return (
            <div className="sequence-input">
                <div className="display half">
                    <UserInputDisplay name="Low temperature" value={`${this.state.temperatureRange[0]}°`} />
                </div>
                <div className="display half">
                    <UserInputDisplay name="High temperature" value={`${this.state.temperatureRange[1]}°`} />
                </div>
                <div className="slider">
                    <TemperatureRange values={this.state.temperatureRange} handleSlide={this.handleSlide} />
                </div>
                <Link to="/chance-of-rain"><button className="sequence-button">Next</button></Link>
            </div>
        );
    }
}

export default Temperature;