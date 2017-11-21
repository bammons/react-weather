import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import localeSelect from './localeSelectReducer';
import fetchWeather from './weatherReducer';

const rootReducer = combineReducers({
  router: routerReducer,
  localeSelect,
  fetchWeather
});

export default rootReducer;
