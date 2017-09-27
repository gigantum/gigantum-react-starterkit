/*eslint-disable */
import {weatherActions} from 'js/components/weather/WeatherActions';
import {dispatcher} from 'js/dispatcher';

class WeatherStore {
	constructor () {
    this.init = false;
		this.weather = {};
		this.rainProb = null;
		this.lowTemp = null;
		this.highTemp = null;
		this.commuteTime = null;
		this.hourly = null;
		this.bindListeners({
			initialize: weatherActions.initialize,
			setWeatherData: weatherActions.setWeatherData
		});
	}

	initialize(){
    this.init = true;
	}

	setWeatherData(data){
		this.setState(data);
	}

}


export const weatherStore = dispatcher.createStore(WeatherStore, 'WeatherStore');
