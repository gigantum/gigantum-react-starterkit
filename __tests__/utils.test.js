import renderer from 'react-test-renderer';
import React from 'react';

import {findHourIndex} from 'js/utils/find-hour-index.js'
import {setCommuteTime} from 'js/utils/set-commute-time.js'

describe('Utils tests', () => {

  test('setCommuteTime returns AM string that corresponds to unix timestamp', () => {
    let commute = setCommuteTime(1506600000,true);//1506600000 is unix timestamp for 9/28/2017 at 8:00am EST
    expect(commute).toBe("8:00 AM-9:00 AM, 9/28/2017");
  })

  test('setCommuteTime returns PM string that corresponds to unix timestamp', () => {
    let commute = setCommuteTime(1506632400,true);//1506632400 is unix timestamp for 9/28/2017 at 5:00pm EST
    expect(commute).toBe("5:00 PM-6:00 PM, 9/28/2017");
  })

  test('setCommuteTime returns morning commute when weather data is daily', () => {
    let commute = setCommuteTime(1506632400,false);//1506632400 is unix timestamp for 9/28/2017 at 5:00pm EST
    expect(commute).toBe("8:00 AM-9:00 AM, 9/28/2017");
  })

  test('findHourIndex returns false on Friday evening', () => {
    let currentTime = new Date(1506726000*1000) //1506726000 is unix timestamp for 9/29/2017 at 7:00pm EST
    let hourIndex = findHourIndex(currentTime);
    expect(hourIndex).toBe(false);
  })

  test('findHourIndex returns false on Saturday morning before 7:00am', () => {
    let currentTime = new Date(1506765600*1000) //1506765600 is unix timestamp for 9/29/2017 at 6:00am EST
    let hourIndex = findHourIndex(currentTime);
    expect(hourIndex).toBe(false);
  })

  test('findHourIndex returns 25 on Sunday morning at 7:00am', () => {
    let currentTime = new Date(1506855600*1000) //1506855600 is unix timestamp for 10/1/2017 at 7:00am EST
    let hourIndex = findHourIndex(currentTime);
    expect(hourIndex).toBe(25);
  })

});
