import getWeather from '../services/weather';

export const LocaleSelect = {
  INITIALIZE: 'initialize',
};

export const WeatherActions = {
  FETCH: 'fetch'
};

export function initialize(data) {
  return { type: LocaleSelect.INITIALIZE, payload: data };
};

export function pushWeatherData(data) {
  return { type: WeatherActions.FETCH, payload: data };
};

export function getWeatherData(query) {
  return function(dispatch) {
    return getWeather(query, function(data) {
      dispatch(pushWeatherData(data));
    });
  }
}
