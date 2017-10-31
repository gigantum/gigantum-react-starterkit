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

	loadingData() {
		return null
	}

	/**
	* @param {Object} data - Details the type of user input (minTemp, maxTemp, maxChanceOfRain) as key, and the number-value as value
	* @param {string} key
	* @param {string} value
	*/
	userInput(data) {
		return data
	}
}
export const weatherActions = dispatcher.createActions(WeatherActions);
