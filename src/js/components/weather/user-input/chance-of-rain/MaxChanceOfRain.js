import React, { Component } from 'react';
import Slider from 'rc-slider';

import { weatherActions, convenience } from 'js/components/weather/WeatherActions';
import { weatherStore } from 'js/components/weather/WeatherStore';

import 'rc-slider/assets/index.css';
import 'js/components/weather/user-input/chance-of-rain/MaxChanceOfRain.scss'

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

//     handleChange(max) {
//         this.props.handleSlide(max)
//     }
    
//     handleAfterChange(max) {
//         convenience.isNotGrabbing();
//         weatherActions.maxChanceOfRain(max);
//         if (weatherStore.getState().weather) {
//             weatherActions.youShouldBike();
//         }
//     }
  
    handleChange(max) {
        this.props.handleSlide(max)
        weatherActions.maxChanceOfRain(max);
        if (weatherStore.getState().weather) {
            weatherActions.youShouldBike();
        }
    }
  
    handleAfterChange(max) {
        convenience.isNotGrabbing();
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