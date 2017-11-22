import { createSelector } from 'reselect';

const getCountry = state => state.localeSelect.country;
const getLocaleData = state => state.localeSelect.data;

export const getCities = createSelector(
  [getCountry, getLocaleData],
  (country, localeData) => localeData[country] || []
)
