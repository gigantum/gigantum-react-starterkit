import { weatherActions } from './WeatherActions'

import {getApiData, requestLocation } from 'js/utils/api';

export const WeatherSource = {
  updateLocation: {
    // remotely fetch something (required)
    remote(state) {
      return requestLocation();
    },

    // this function checks in our local cache first
    // if the value is present it'll use that instead (optional).
    // local(state) {
    //   return state.location ? state.location : null;
    // },

    // here we setup some actions to handle our response
    loading: weatherActions.loadingData,
    success: weatherActions.receivedLocation, // (required)
    error: weatherActions.locationAccessDenied, // (required)

    // should fetch has precedence over the value returned by local in determining whether remote should be called
    // in this particular example if the value is present locally it would return but still fire off the remote request (optional)
    shouldFetch(state) {
      return true
    }
  },
  updateWeather: {
    remote(state) {
      return getApiData(state.location);
    },

    // No local() method - we would not want to present outdated weather data

    loading: weatherActions.loadingData,
    success: weatherActions.receivedWeatherData,
    error: weatherActions.weatherDataError,

    // No shouldFetch method needed without local method 
  },
};