import { LocaleSelect } from '../actions/actions';

const initialState = {
  city: '',
  country: '',
  data: {}
};

function localeSelect(state = initialState, action) {
  switch (action.type) {
    case LocaleSelect.INITIALIZE:
      return Object.assign({}, state, { data: action.payload });
    case LocaleSelect.SELECT_COUNTRY:
      return Object.assign({}, state, { country: action.payload });
    case LocaleSelect.SELECT_CITY:
      return Object.assign({}, state, { city: action.payload });
    default:
      return state;
  }
}

export default localeSelect;
