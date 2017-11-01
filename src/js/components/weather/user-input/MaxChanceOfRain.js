import React, { Component } from 'react';
import Slider from 'rc-slider';

import { weatherActions, convenience } from '../WeatherActions';
import { weatherStore } from '../WeatherStore';

import 'css/vendor/rc-slider.scss';

class MaxChanceOfRain extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(max) {
        weatherActions.maxChanceOfRain(max);
    }

    render() {
        return (
            <div>
                <Slider
                    min={0}
                    max={100}
                    defaultValue={50}
                    onBeforeChange={convenience.isGrabbing}
                    onAfterChange={convenience.isNotGrabbing}
                    onChange={this.handleChange} />
            </div>
        );
    }
}

export default MaxChanceOfRain;