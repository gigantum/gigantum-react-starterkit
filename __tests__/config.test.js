import * as config from '../src/js/config';

describe('Config Tests', () => {

  test('No url\'s should contain localhost', () => {
    Object.keys(config.urls).forEach(key => {
      const entry = config.urls[key];
      if (typeof entry === 'function') {
        expect(entry().indexOf('localhost')).toBe(-1);
      } else if (typeof entry === 'string') {
        expect(entry.indexOf('localhost')).toBe(-1);
      }
    });
  });

});
