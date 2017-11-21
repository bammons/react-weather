import getWeather from '../services/weather';

export const LocaleSelect = {
  INITIALIZE: 'initialize',
  SELECT_COUNTRY: 'select_country',
  SELECT_CITY: 'select_city'
};

export const WeatherActions = {
  FETCH: 'fetch'
};

export function initialize(data) {
  return { type: LocaleSelect.INITIALIZE, payload: data };
};

export function selectCountry(country) {
  return { type: LocaleSelect.SELECT_COUNTRY, payload: country }
};

export function selectCity(city) {
  return { type: LocaleSelect.SELECT_CITY, payload: city };
};

export function pushWeatherData(data) {
  return { type: WeatherActions.FETCH, payload: data };
};

export function getWeatherData(query) {
  return dispatch => {
    return getWeather(query).then(data => {
      dispatch(pushWeatherData(data));
    });
  }
};
