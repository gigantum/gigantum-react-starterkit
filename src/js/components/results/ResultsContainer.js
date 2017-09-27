import React, {Component} from 'react';

import {weatherStore} from 'js/components/weather/WeatherStore';
import {illuminatePic} from 'js/utils/illuminate-pic.js'

import Results from './Results';


export default class ResultsContainer extends Component {

  constructor(props) {
    super(props);
    this.bikePhoto = null;
    this.metroPhoto = null;
    this.state = weatherStore.getState();
    weatherStore.listen(this.storeDidUpdate.bind(this));
  }

  storeDidUpdate = () => {
    this.setState(weatherStore.getState());
  }

  render () {
    let caveat = null;
    if(this.state.hourly===false){ //shows caveat if hourly data is not available
      caveat = "*Data based on daily forecast. Check back 48 hours before your commute for a more accurate prediction."
    }
    const pics = illuminatePic(); //returns correct picture based on store data
    return (
        <Results bikeClass = "bike-logo" metroClass = "metro-logo" transport={this.state.transport}
        bikeSrc={pics.bikePhoto} metroSrc={pics.metroPhoto} caveat={caveat}/>
    )
  }
}
