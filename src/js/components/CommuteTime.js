import React, {Component} from 'react';
import {weatherStore} from 'js/components/weather/WeatherStore';

export default class CommuteTime extends Component {

  constructor(props){
    super(props)
    this.state = weatherStore.getState();
    weatherStore.listen(this.storeDidUpdate.bind(this));
  }

  storeDidUpdate = () => {
    this.setState(weatherStore.getState());
  }

  render () {
    let commuteTime;
    if(this.state.init){ //checks if API data has been retrieved
      commuteTime = "Next commute: " + this.state.commuteTime;
    }
    else{
      commuteTime = "Fetching commute data..."
    }
    return (
      <h2 className='app-subtitle'>{commuteTime}</h2>
    )
  }

}
