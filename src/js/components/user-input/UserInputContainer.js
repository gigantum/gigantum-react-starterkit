import React, {Component} from 'react';
//Locals
import {weatherStore} from 'js/components/weather/WeatherStore';
import {weatherActions} from 'js/components/weather/WeatherActions';

export default class UserInputContainer extends Component {

  constructor(props) {
    super(props);
    this.state = weatherStore.getState();
    this.formValues = {};
		weatherStore.listen(this.storeDidUpdate.bind(this));
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event) { //validates input and sends values to store if valid
    let formValues = this.formValues;
    let name = event.target.name
    let value = event.target.value

    if(name=="maxRain"&&value>100){ //validates percentage field input
      alert("Please enter a percentage between 0 and 100.")
      event.target.value=null
    }
    else if(isNaN(value)===false){
      formValues[name] = value;
      weatherActions.setPrefs(this.formValues) //sends form values to store
    }
    else{
      alert("Please enter a valid number.")
      event.target.value=null
    }
  }

  handleSubmit(event) { //determines if user should bike or take the metro
    event.preventDefault();
    if(this.state.init){ //checks if store has been initialized
  		if(this.state.preferences.minTemp>this.state.lowTemp|| //compares user preferences to weather
  		   this.state.preferences.maxTemp<this.state.highTemp||
  		   this.state.preferences.maxRain/100<(this.state.rainProb)){
  			 weatherActions.setTransport("Metro") //sends data to store
  		}
  		else{
  			weatherActions.setTransport("Bike")
  		}
    }
  }

  storeDidUpdate = () => {
    this.setState(weatherStore.getState());//triggers re-render when store updates
  }

  render() {
    const inputFields = [{label: "Coldest Temperature (°F)", name:"minTemp",
    value: this.state.preferences.minTemp},{label: "Hottest Temperature (°F)", name:"maxTemp",
    value: this.state.preferences.maxTemp},{label: "Maximum Chance of Rain (%)", name:"maxRain",
    value: this.state.preferences.maxRain}]

    return (

    )
  }
}
