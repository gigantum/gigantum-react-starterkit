/*eslint-disable */
import { weatherActions } from 'js/components/weather/WeatherActions';
import { dispatcher } from 'js/dispatcher';
import { WeatherSource } from 'js/components/weather/WeatherSource';

class WeatherStore {
	constructor() {
		this.init = false;
		this.registerAsync(WeatherSource);
		
		this.bindListeners({
			initialize: weatherActions.initialize,
			handleReceivedWeatherData: weatherActions.receivedWeatherData,
			handleReceivedLocation: weatherActions.receivedLocation,
			handleNoLocationData: weatherActions.locationAccessDenied,
			handleWeatherDataError: weatherActions.weatherDataError,
			handleLoadingWeather: weatherActions.loadingWeather,
		});
	}

	initialize() {
		this.init = true;
	}

	handleReceivedLocation(location) {
		this.location = {
			latitude: location.coords.latitude,
			longitude: location.coords.longitude
		};
	}

	handleReceivedWeatherData(data) {
		this.weather = data;
		this.phase = 'success';
	}

	handleNoLocationData() {
		this.location = {
			latitude: '38.9072',
			longitude: '77.0369',	
		}
	}

	handleWeatherDataError(error) {
		this.error = error;
		this.phase = 'error';
	}

	handleLoading() {
		this.phase = 'loading';
	}
}


export const weatherStore = dispatcher.createStore(WeatherStore, 'WeatherStore');