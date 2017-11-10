import { urls } from 'js/config';

let fetchApiData = (data) => {
  let invocation = new XMLHttpRequest();
  invocation.open('GET', urls.itemInfo(data), true);
  invocation.send();

  return invocation;
}
/**
 * Fetches data from api specified in js/config/urls
 * @param {{latitude: string, longitude: string}} data - contains latitude and longitude for API request
 */
export let getApiData = (data) => {
  return new Promise((resolve, reject) => {
    let invocation = fetchApiData(data);
    invocation.onload = () => resolve(JSON.parse(invocation.responseText));
    invocation.onerror = () => reject(JSON.parse(invocation.statusText));
  })
}

/**
 * Requests location access from browser
 * @return {PromiseLike<object>}
 */
export const requestLocation = () => { 
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}