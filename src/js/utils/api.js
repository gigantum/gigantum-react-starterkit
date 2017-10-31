import { urls } from 'js/config';

let fetchApiData = (data) => {
  let invocation = new XMLHttpRequest();
  invocation.open('GET', urls.itemInfo(data), true);
  invocation.send();

  return invocation;
}
/**
 * @param {Object} data - contains latitude and longitude for API request
 * @param {string} data.latitude
 * @param {string} data.longitude
 */
export let getApiData = (data) => {
  return new Promise((resolve, reject) => {
    let invocation = fetchApiData(data);
    invocation.onload = () => resolve(JSON.parse(invocation.responseText));
    invocation.onerror = () => reject(JSON.parse(invocation.statusText));
  })
}

export const requestLocation = () => { 
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}