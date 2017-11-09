import React, { Component } from 'react';
import { Range } from "rc-slider";

import { weatherActions, convenience } from 'js/components/weather/WeatherActions';
import { weatherStore } from 'js/components/weather/WeatherStore';

import 'rc-slider/assets/index.css'

class TemperatureRange extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(range) {
        this.props.handleSlide(range)
        weatherActions.temperatureRange(range);
        if (weatherStore.getState().weather) {
            weatherActions.youShouldBike();
        }
    }
    
    handleAfterChange(range) {
        convenience.isNotGrabbing();
    }

    render() {
        return (
            <div>
                <Range
                    count={2}
                    min={0}
                    max={100}
                    value={this.props.values || [50, 60]}
                    step={1}
                    pushable={10}
                    onBeforeChange={convenience.isGrabbing}
                    onAfterChange={this.handleAfterChange} 
                    onChange={this.handleChange}
                />
            </div>
        );
    }
}

export default TemperatureRange;