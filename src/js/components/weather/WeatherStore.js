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
			setWeatherData: weatherActions.setWeatherData,
			setPrefs: weatherActions.setPrefs,
			setTransport: weatherActions.setTransport
		});
	}

	initialize(){
    this.init = true;
	}

	setWeatherData(data){
		this.setState(data);
	}

	setPrefs(prefs){
		this.setState({preferences: prefs});
	}

	setTransport(value){
		this.setState({transport:value})
	}

}


export const weatherStore = dispatcher.createStore(WeatherStore, 'WeatherStore');
