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
  
  applyBackground(props) {
      return {background: `rgb(100, 150, 255)`}
  }

  storeDidUpdate = () => {
    this.setState(weatherStore.getState());//triggers re-render when store updates
  }

  render() {

    return (
      <HashRouter>
        <div className="app-body">
          <div className="body" style={this.applyBackground()}>
            <div className="container">
              <Illustration tempIntensity={4} rainIntensity={5} chanceOfRain={this.state.maxChanceOfRian} />
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
