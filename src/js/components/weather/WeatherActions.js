import { dispatcher } from 'js/dispatcher';
import { weatherStore } from 'js/components/weather/WeatherStore';
import { youShouldBikeToday } from 'js/utils/helpers'

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
	
	temperatureRange(range) {
		return range;
	}
	
	maxChanceOfRain(max) {
		return max;
	}

	maxRainIntensity(max) {
		return max;
	}

	youShouldBike() {
		const state = weatherStore.getState();
		const answer = youShouldBikeToday(state);
		return answer;
	}

	atResult(atResult) {
		return atResult;
	}
}

export const weatherActions = dispatcher.createActions(WeatherActions);
