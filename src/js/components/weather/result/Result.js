import React, { Component } from 'react';

import { weatherStore } from 'js/components/weather/WeatherStore';
import { weatherActions } from 'js/components/weather/WeatherActions';

class Result extends Component {
    constructor(props) {
        super(props);
        this.state = weatherStore.getState();
    }

    
    componentDidMount() {
        console.log('did mount')
    }

    render() {
        return (
            <div>
                {this.state.shouldBike ? <p>bike</p> : <p>metro</p>}
            </div>
        );
    }
}

export default Result;