import { dispatcher } from 'js/dispatcher';

export const convenience = {
	// Sets not-grabbing class to root to reset normal cursor
	isNotGrabbing() {
		weatherActions.cursorIsGrabbing(false)
	},
	
	// Sets grabbing class to root (to eliminate flashing cursor)
	isGrabbing() {
		weatherActions.cursorIsGrabbing(true)
	}
}


class WeatherActions {
	//actions passes off data to the store
	initialize() {
		return null;
	}
	
	cursorIsGrabbing(grabbing) {
		if (grabbing) {
			return 'grabbing';
		}
		return 'not-grabbing';
	}
	
	// Applies location data to store
	receivedLocation(location) {
		return location
	}
	
	locationAccessDenied(error) {
		return error
	}
	
	// Applies weather data to store
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
	 * @param {array} range - [lower-limit, upper-limit]
	 */
	temperatureRange(range) {
		return range;
	}
	
	/**
	 * @param {number} max 
	 */
	maxChanceOfRain(max) {
		return max;
	}
}

export const weatherActions = dispatcher.createActions(WeatherActions);
