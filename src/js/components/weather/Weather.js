//Vendor
import React, { Component } from 'react';
//Locals
import { weatherStore } from 'js/components/weather/WeatherStore';
import { weatherActions } from 'js/components/weather/WeatherActions';

import { viewOptions } from 'js/config';

import SequenceInput from 'js/components/weather/user-input/SequenceInput'

export default class Body extends Component {
  constructor(props) {
    super(props);
    this.state = weatherStore.getState();
    weatherStore.listen(this.storeDidUpdate.bind(this));
  }

  /*
    get api data when the component mounts
  */
  componentDidMount() {
    // Subscribe to the store for updates
    weatherActions.initialize(); //initialize store
    weatherStore.updateLocation()
      .then(weatherStore.updateWeather)
      .catch((error) => {
        console.error('error', error)
      })
  }

  storeDidUpdate = () => {
    this.setState(weatherStore.getState());//triggers re-render when store updates
  }

  render() {

    return (
      <div>
        <SequenceInput />
      </div>
    );
  }
}
