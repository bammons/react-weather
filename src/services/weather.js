import util from '../utils/APIUtils';

function getWeather(query, cb) {
  util.get(query, cb);
};

export default getWeather;
