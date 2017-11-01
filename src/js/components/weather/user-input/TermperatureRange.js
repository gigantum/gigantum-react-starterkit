import React, { Component } from 'react';
import { Range } from "rc-slider";

import { weatherActions, convenience } from '../WeatherActions';
import { weatherStore } from '../WeatherStore';

import 'css/vendor/rc-slider.scss'

class TemperatureRange extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(range) {
        weatherActions.temperatureRange(range);
    }

    render() {
        return (
            <div>
                <Range
                    count={2}
                    min={0}
                    max={100}
                    defaultValue={[45, 80]}
                    step={1}
                    pushable={10}
                    onBeforeChange={convenience.isGrabbing}
                    onAfterChange={convenience.isNotGrabbing}
                    onChange={this.handleChange}
                />
            </div>
        );
    }
}

export default TemperatureRange;