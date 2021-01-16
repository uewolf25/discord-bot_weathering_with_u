import * as openWeatherMap from '../src/openWeatherMap';

declare let global: {
  Logger: { log: Function };
  PropertiesService: { getScriptProperties: () => { getProperty: Function } };
  UrlFetchApp: { fetch: () => { getContentText: Function } };
};

// mock
global.Logger = { log: () => undefined };
global.PropertiesService = {
  getScriptProperties: () => ({ getProperty: () => '' }),
};

test('normal success', () => {
  // mock
  global.UrlFetchApp = {
    fetch: () => ({ getContentText: () => '{}' }),
  };

  expect(openWeatherMap.GetWeatherForecastToOpenWeatherMapApi(36.366503, 140.470997)).toEqual({});
});

test('max retry count is 3', () => {
  // mock
  global.UrlFetchApp = {
    fetch: () => {
      throw new Error();
    },
  };

  try {
    openWeatherMap.GetWeatherForecastToOpenWeatherMapApi(36.366503, 140.470997);
  } catch (error) {
    if (error instanceof Array) {
      expect(error.length).toBe(3);
    } else {
      throw error;
    }
  }
});
