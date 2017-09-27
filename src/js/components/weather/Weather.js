//Vendor
import React, {Component} from 'react';
//Locals
import {weatherStore} from 'js/components/weather/WeatherStore';
import {weatherActions} from 'js/components/weather/WeatherActions';

import {getApiData} from 'js/utils/api';
import {viewOptions} from 'js/config';
import {findHourIndex} from 'js/utils/find-hour-index';

import UserInputContainer from 'js/components/user-input/UserInputContainer';
import ResultsContainer from 'js/components/results/ResultsContainer';

export default class Body extends Component {
  constructor(props){
		super(props);
		this.state = weatherStore.getState();
		weatherStore.listen(this.storeDidUpdate.bind(this));
	}

  /*
    get api data when the component mounts
  */
  componentDidMount() {
    var request, hourIndex;
    // Subscribe to the store for updates
    request = getApiData(); //get API data
    request.onreadystatechange = function(){ //stores API data
      if(request.readyState==4&&request.status==201){
        weatherActions.initialize(); //initalizes store once API call is successful
        hourIndex = findHourIndex(); //finds index that corresponds to commute in hourly data array
        weatherActions.setWeatherData(request.responseText, hourIndex); //sends commute weather data to store
      }
    }
  }

  storeDidUpdate = () => {
    this.setState(weatherStore.getState());//triggers re-render when store updates
  }

  render () {

    return (
      <div className="app-body">
        <UserInputContainer/>
        <ResultsContainer/>
      </div>
    );
  }
}
