import { LocaleSelect } from '../actions/actions';

const initialState = {
  countries: [],
  cities: [],
  city: '',
  country: '',
  data: {}
};

function localeSelect(state = initialState, action) {
  switch (action.type) {
    case LocaleSelect.INITIALIZE:
      return Object.assign({}, state, {
        countries: Object.keys(action.payload),
        data: action.payload
      });
    case LocaleSelect.SELECT_COUNTRY:
      return Object.assign({}, state, {
        cities: state.data[action.payload],
        country: action.payload
      });
    case LocaleSelect.SELECT_CITY:
      return Object.assign({}, state, { city: action.payload });
    default:
      return state;
  }
}

export default localeSelect;
