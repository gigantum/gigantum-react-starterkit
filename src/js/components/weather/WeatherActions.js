import { dispatcher } from 'js/dispatcher';

class WeatherActions {
	//actions passes off data to the store
	initialize() {
		return null;
	}

	receivedLocation(location) {
		return location
	}

	locationAccessDenied(error) {
		return error
	}

	receivedWeatherData(data) {
		return data
	}

	weatherDataError(error) {
		return error
	}

	loadingWeather() {
		return null
	}
}
export const weatherActions = dispatcher.createActions(WeatherActions);
