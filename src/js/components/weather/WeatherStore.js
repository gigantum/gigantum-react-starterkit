/*eslint-disable */
import { weatherActions } from 'js/components/weather/WeatherActions';
import { dispatcher } from 'js/dispatcher';
import { WeatherSource } from 'js/components/weather/WeatherSource';
import { commuteWeather } from 'js/utils/helpers';

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
			handleLoading: weatherActions.loadingData,
			handleTemperatureRange: weatherActions.temperatureRange,
			handleMaxChanceOfRain: weatherActions.maxChanceOfRain,
			handleMaxRainIntensity: weatherActions.maxRainIntensity,
			handleCursorIsGrabbing: weatherActions.cursorIsGrabbing,
			handleShouldBike: weatherActions.youShouldBike,
			handleAtResult: weatherActions.atResult,
		});
	}

	initialize() {
		this.maxChanceOfRain = 100;
		this.init = true;
		this.isGrabbing = "not-grabbing";
		this.temperatureRange = [45, 80];
		this.maxRainIntensity = 0;
		this.morningCommute = 8;
		this.eveningCommute = 17;
		this.shouldBike = false;
		this.atResult = false;
	}

	handleReceivedLocation(location) {
		this.location = {
			latitude: location.coords.latitude,
			longitude: location.coords.longitude
		};
	}

	handleReceivedWeatherData(data) {
		this.weather = data;
		this.morningWeather = commuteWeather(data, this.morningCommute);
		this.eveningWeather = commuteWeather(data, this.eveningCommute);
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

	handleTemperatureRange(range) {
		this.temperatureRange = range;
	}

	handleMaxChanceOfRain(max) {
		this.maxChanceOfRain = max;
	}

	handleMaxRainIntensity(max) {
		this.maxRainIntensity = max;
	}

	handleCursorIsGrabbing(isGrabbing) {
		this.isGrabbing = isGrabbing;
	}

	handleShouldBike(shouldBike) {
		this.shouldBike = shouldBike;
	}

	handleAtResult(atResult) {
		this.atResult = atResult;
	}
}


export const weatherStore = dispatcher.createStore(WeatherStore, 'WeatherStore');