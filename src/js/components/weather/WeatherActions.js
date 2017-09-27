import {dispatcher} from 'js/dispatcher';

class WeatherActions {
	//actions passes off data to the store
	initialize(){
		return null
	}

	setWeatherData(data, hourIndex){ //takes API response and isolates relevant data based on commute
		var response, weather, rainProb, highTemp, lowTemp, temperature, commuteTime, hourly;
		var response = JSON.parse(data);
		if(hourIndex===false){ //if hourly data is unavailable
			weather = response.daily.data;
			rainProb = weather.precipProbability;
			highTemp = weather.temperatureHigh;
			lowTemp = weather.temperatureLow;
			hourly = false;
		}
		else{ //if hourly data is available
			weather = response.hourly.data[hourIndex];
			rainProb = weather.precipProbability;
			highTemp = weather.temperature;
			lowTemp = weather.temperature;
			hourly = true;
		}
		commuteTime = setCommuteTime(weather.time, hourly); //sets commute time
		return {weather, rainProb, highTemp, lowTemp, commuteTime, hourly}
	}

	setTransport(value){ //sends transportation type t
		return value
	}

}
export const weatherActions = dispatcher.createActions(WeatherActions);
