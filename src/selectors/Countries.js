import { createSelector } from 'reselect';

const getLocaleData = state => state.localeSelect.data;

export const getCountries = createSelector(
  [getLocaleData],
  (localeData) => Object.keys(localeData)
)
