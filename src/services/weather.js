import util from '../utils/APIUtils';

function getWeather(query) {
  return util.get(query);
};

export default getWeather;
