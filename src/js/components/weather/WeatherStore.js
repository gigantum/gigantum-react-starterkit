/*eslint-disable */
import {weatherActions} from 'js/components/weather/WeatherActions';
import {dispatcher} from 'js/dispatcher';

class WeatherStore {
	constructor () {
    this.init = false
		this.hourly = null;

		this.bindListeners({
			initialize: weatherActions.initialize
		});
	}

	initialize(){
    this.init = true;
	}
}


export const weatherStore = dispatcher.createStore(WeatherStore, 'WeatherStore');
