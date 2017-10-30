import { weatherActions } from './WeatherActions'
import {getApiData} from 'js/utils/api';

const requestLocation = () => { 
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

const WeatherSource = {
  updateLocation: {
    // remotely fetch something (required)
    remote(state) {
      return requestLocation();
    },

    // this function checks in our local cache first
    // if the value is present it'll use that instead (optional).
    local(state) {
      return state.results[state.location] ? state.location : null;
    },

    // here we setup some actions to handle our response
    success: weatherActions.receivedLocation, // (required)
    error: weatherActions.locationAccessDenied, // (required)

    // should fetch has precedence over the value returned by local in determining whether remote should be called
    // in this particular example if the value is present locally it would return but still fire off the remote request (optional)
    shouldFetch(state) {
      return true
    }
  }
};