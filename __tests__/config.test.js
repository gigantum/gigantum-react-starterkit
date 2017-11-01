import * as config from '../src/js/config';

import { hoursTillCommute, youShouldBikeToday } from '../src/js/utils/helpers'

describe('Config Tests', () => {

  //Write Tests Here

  test('Hours till commute takes number (1-24) and returns the difference in hours', () => {
    const fakeDate = new Date();
    fakeDate.setHours(7);
    const hourOfCommute = hoursTillCommute(9, fakeDate);
    expect(hourOfCommute).toBe(2);

    fakeDate.setHours(20);
    const nextHourOfCommute = hoursTillCommute(4, fakeDate);
    expect(nextHourOfCommute).toBe(8);
  }) 

  test('No url\'s should contain localhost', () => {
    Object.keys(config.urls).forEach(key => {
      const entry = config.urls[key];
      if (typeof entry === 'function') {
        expect(entry({latitude: 40, longitude: 70}).indexOf('localhost')).toBe(-1);
      } else if (typeof entry === 'string') {
        expect(entry.indexOf('localhost')).toBe(-1);
      }
    });
  });

});
