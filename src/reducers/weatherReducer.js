import { WeatherActions } from '../actions/actions';

const initialState = {};

function convertToFahrenheit(kelvin) {
  return Math.floor((9 / 5) * (kelvin - 273) + 32);
};

function fetchWeather(state = initialState, action) {
  switch (action.type) {
    case WeatherActions.FETCH:
      let newState = action.payload;
      newState.weather = newState.weather[0];
      newState.main.temp = convertToFahrenheit(newState.main.temp);
      newState.main.temp_max = convertToFahrenheit(newState.main.temp_max);
      newState.main.temp_min = convertToFahrenheit(newState.main.temp_min);
      return Object.assign({}, state, newState);
    default:
      return state;
  }
};

export default fetchWeather;
