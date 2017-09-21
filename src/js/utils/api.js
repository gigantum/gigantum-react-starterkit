import {urls} from 'js/config';

let fetchApiData = (appId) => {
  let invocation = new XMLHttpRequest();
  invocation.open('GET', urls.itemInfo(appId), true);
  invocation.send();

  return invocation;
}
/**
* @param {string} appId - API Id or to get info about
*/
export let getApiData = (apiId) => {

    let invocation = fetchApiData(apiId)

    return invocation;
}
