import React, { Component } from 'react';
import Slider from 'rc-slider';

import { weatherActions, convenience } from '../WeatherActions';
import { weatherStore } from '../WeatherStore';

import 'rc-slider/assets/index.css';
import './MaxChanceOfRain.scss'

const style = {
    track: {
        color: 'white',
        border: 'black',
    },
    rail: {
        color: 'black',
    },
    dot: {
        color: 'black',
    },
    activeDot: {
        color: 'black',
    }
}

class MaxChanceOfRain extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(max) {
        this.props.handleSlide(max)
    }
    
    handleAfterChange(max) {
        convenience.isNotGrabbing();
        weatherActions.maxChanceOfRain(max);
        weatherActions.youShouldBike();
    }

    render() {
        return (
            <div className="max-chance-slider">
                <Slider
                    min={0}
                    max={100}
                    value={this.props.value || 0}
                    onBeforeChange={convenience.isGrabbing}
                    onAfterChange={this.handleAfterChange}
                    onChange={this.handleChange}
                    trackStyle={style.track}
                    railStyle={style.rail}
                    dotStyle={style.dot}
                    activeDotStyle={style.activeDot}
                />
            </div>
        );
    }
}

export default MaxChanceOfRain;