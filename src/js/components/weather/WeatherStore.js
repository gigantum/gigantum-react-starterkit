/*eslint-disable */
import {weatherActions} from 'js/components/weather/WeatherActions';
import {dispatcher} from 'js/dispatcher';
import {WeatherSource} from 'js/components/weather/WeatherSource';

class WeatherStore {
	constructor () {
    this.init = false
		this.registerAsync(WeatherSource)
		this.bindListeners({
			initialize: weatherActions.initialize
		});
	}

	initialize(){
    this.init = true;
	}
}


export const weatherStore = dispatcher.createStore(WeatherStore, 'WeatherStore');
