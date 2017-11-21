import { LocaleSelect } from '../actions/actions';

const initialState = {}

function localeSelect(state = initialState, action) {
  switch (action.type) {
    case LocaleSelect.INITIALIZE:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
}

export default localeSelect;
