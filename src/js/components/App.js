//Vendor
import React, { Component } from 'react';
//Components
import Header from 'js/components/Header';
import Weather from 'js/components/weather/Weather';
import {weatherStore} from 'js/components/weather/WeatherStore'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = weatherStore.getState();
    weatherStore.listen(this.storeDidUpdate.bind(this));
  }

  storeDidUpdate = () => {
    if (this.state.isGrabbing !== weatherStore.getState().isGrabbing) {
      this.setState({ isGrabbing: weatherStore.getState().isGrabbing });//triggers re-render when store updates
    }
  }

  render() {
    // include grabbing or not-grabbing class to stop flashing cursor when moving sliders
    return (
      <div className={`root ${this.state.isGrabbing}`}>
        <Header />
        <Weather />
      </div>

    );
  }

}
