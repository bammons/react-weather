import { WeatherActions } from '../actions/actions';

const initialState = {};

function fetchWeather(state = initialState, action) {
  switch (action.type) {
    case WeatherActions.FETCH:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
}

export default fetchWeather;
