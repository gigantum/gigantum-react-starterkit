import React, { Component } from 'react';

import { weatherStore } from 'js/components/weather/WeatherStore';

import TemperatureRange from './TermperatureRange';
import MaxChanceOfRain from './MaxChanceOfRain';
import UserInputDisplay from './UserInputDisplay';

import './SequenceInput.scss'

class componentName extends Component {
    constructor(props) {
        super(props);
        this.state = {
            position: 0,
            temperatureRange: [0, 1],
            sequence: [
                {
                    component: TemperatureRange,
                    buttonText: 'next'
                },
                {
                    component: MaxChanceOfRain,
                    buttonText: 'finish'
                },
                /*{ 
                    component: CommuteTime
                }*/
            ]
        };
        weatherStore.listen(this.storeDidUpdate.bind(this));
        this.handleClick = this.handleClick.bind(this);
    }

    componentWillMount() {
        this.setState(weatherStore.getState())
    }

    storeDidUpdate = () => {
        this.setState(weatherStore.getState());//triggers re-render when store updates
    }

    renderSequencedComponent() {
        console.log(this.state.temperatureRange);
        switch (this.state.position) {
            case 0:
                return (
                    <div>
                        <div className="display half">
                            <UserInputDisplay name="Low temperature" value={this.state.temperatureRange[0]} />
                        </div>
                        <div className="display half">
                            <UserInputDisplay name="High temperature" value={this.state.temperatureRange[1]} />
                        </div>
                        <div className="slider">
                            <TemperatureRange values={this.state.temperatureRange} />
                        </div>
                    </div>    
                )
            case 1:
                return (
                    <div>
                        <div className="display">
                            <UserInputDisplay name="Max chance of rain" value={this.state.maxChanceOfRain}>
                            </UserInputDisplay>
                        </div>
                        <div className="slider">
                            <MaxChanceOfRain value={this.state.maxChanceOfRain} />
                        </div>
                    </div>
                )
            default:
                break;
        }
    }

    handleClick() {
        this.setState({ position: this.state.position + 1 })
    }

    render() {
        const { position, sequence } = this.state;
        return (
            <div className="sequence-input">
                {this.renderSequencedComponent()}
                <button onClick={this.handleClick}>{sequence[position].buttonText}</ button>
            </div>
        );
    }
}

export default componentName;