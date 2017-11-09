//Vendor
import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';

//Locals
import { weatherStore } from 'js/components/weather/WeatherStore';
import { weatherActions } from 'js/components/weather/WeatherActions';

import { viewOptions } from 'js/config';

import Landing from 'js/components/weather/landing/Landing';
import Temperature from 'js/components/weather/user-input/temperature/Temperature';
import ChanceOfRain from 'js/components/weather/user-input/chance-of-rain/ChanceOfRain';
import Result from 'js/components/weather/result/Result';
import Illustration from 'js/components/weather/illustration/Illustration';
import Intensity from 'js/components/weather/user-input/rain-intensity/Intensity';

import 'js/components/weather/Weather.scss';

export default class Body extends Component {
  constructor(props) {
    super(props);
    this.state = weatherStore.getState();
    weatherStore.listen(this.storeDidUpdate.bind(this));
  }

  /*
    get api data when the component mounts
  */
  componentWillMount() {
    // Subscribe to the store for updates
    weatherActions.initialize(); //initialize store
    weatherStore.updateLocation()
      .then(weatherStore.updateWeather)
      .catch((error) => {
        console.error('error', error)
      })
  }
  
  applyBackground() {
      return {background: `rgb(100, 150, ${255 - (Math.floor(this.state.maxChanceOfRain * 1.3))})`}
  }

  storeDidUpdate = () => {
    this.setState(weatherStore.getState());//triggers re-render when store updates
  }

  tempIntensity() {
    const range = this.state.temperatureRange[1] - this.state.temperatureRange[0];
    const middle = this.state.temperatureRange[0] + (range / 2.0);
    if (middle > 70) {
      return 4;
    } else if (middle > 60) {
      return 3;
    } else if (middle > 50) {
      return 2;
    } else if (middle > 40) {
      return 1;
    } 
    return 0;
  }

  rainIntensity() {
    const max = this.state.maxRainIntensity
    if (max > 0.085) {
      return 6
    } else if (max > 0.70) {
      return 5
    } else if (max > 0.055) {
      return 4
    } else if (max > 0.04) {
      return 3
    } else if (max > 0.025) {
      return 2
    } else if (max > 0.01) {
      return 1
    }
    return 0
  }

  render() {
    return (
      <HashRouter>
        <div className="app-body">
          <div className="body" style={this.applyBackground()}>
            <div className="container">
              <Illustration tempIntensity={this.tempIntensity()} rainIntensity={this.rainIntensity()} chanceOfRain={this.state.maxChanceOfRian} />
              <Route exact path="/" component={Landing} />
              <Route path="/temperature" component={Temperature} />
              <Route path="/chance-of-rain" component={ChanceOfRain} />
              <Route path="/rain-intensity" component={Intensity} />
              <Route path="/result" component={Result} />
            </div>  
          </div>
        </div>
      </HashRouter>
    );
  }
}
