import {weatherActions} from 'js/components/weather/WeatherActions';
import {weatherStore} from 'js/components/weather/WeatherStore';
import {getApiData} from 'js/utils/api';

let store = weatherStore;

test('Store is initialized after ready state change', done => { //tests async store initialization code in Weather.js
  function getData(request){
    request.onreadystatechange = function(){ //stores API data
      if(request.readyState==4&&request.status==201){
        weatherActions.initialize(); //initalizes store once API call is successful
      }
      expect(weatherStore.getState().init).toBeTruthy();
      done();
    }
  }
  var request = getApiData();
  getData(request);
});
