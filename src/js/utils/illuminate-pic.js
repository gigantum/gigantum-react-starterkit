import noBikeImg from 'images/bicycle.svg';
import noMetroImg from 'images/metro.svg';
import bikeImg from 'images/bicycle_go.svg';
import metroImg from 'images/metro_go.svg';

import {weatherStore} from 'js/components/weather/WeatherStore';

export const illuminatePic = () => { //shows correct image based on store data

  let transport = weatherStore.getState().transport
  let bikePhoto = noBikeImg
  let metroPhoto = noMetroImg

  if(transport == "Bike"){
    bikePhoto = bikeImg
  }
  if(transport == "Metro"){
    metroPhoto = metroImg
  }
  return {bikePhoto,metroPhoto}
}
