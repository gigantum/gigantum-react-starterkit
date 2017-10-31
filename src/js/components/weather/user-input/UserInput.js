import React, { Component } from 'react';
import RangeSelector from "./RangeSelector";
import { weatherActions } from '../WeatherActions';
import { weatherStore } from '../WeatherStore';

class UserInput extends Component {
    constructor(props) {
        super(props);
        this.state = weatherStore.getState();
        weatherStore.listen(this.storeDidUpdate.bind(this));
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        weatherActions.userInput({ key: [this.props.input], value: event.target.value });
    }

    storeDidUpdate = () => {
        if (weatherStore.getState()[this.props.input] !== this.state[this.props.input]) {
            this.setState(weatherStore.getState()); //triggers re-render when store updates
        }
    }

    render() {
        return (
            <div>
                <RangeSelector
                    min={this.props.min}
                    max={this.props.max}
                    handleChange={this.handleChange}
                    value={this.state[this.props.input] || this.props.max - this.props.min / 2}
                />
            </div>
        );
    }
}

export default UserInput;