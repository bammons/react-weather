import React, { Component } from 'react';
import CitySelector from '../../components/CitySelector/CitySelector';
import CountrySelector from '../../components/CountrySelector/CountrySelector';
import WeatherDisplay from '../../components/WeatherDisplay/WeatherDisplay';
import { getCities } from '../../selectors/Cities';
import { getCountries } from '../../selectors/Countries';
import { initialize, selectCountry, selectCity, getWeatherData } from '../../actions/actions';
import { connect } from 'react-redux';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    props.initializeDispatch(props.countryData);
    this.handleFetchWeatherData = this.handleFetchWeatherData.bind(this);
  }

  handleFetchWeatherData(city) {
    this.props.selectCityDispatch(city, {q: `${city},${this.props.locale.data.codes[this.props.locale.country]}`});
  }

  render() {
    return (
      <div className="App">
        <div className="locale-container">
          <CountrySelector countries={this.props.countries} country={this.props.locale.country} onCountrySelected={this.props.selectCountryDispatch}>
          </CountrySelector>
          <CitySelector cities={this.props.cities} city={this.props.locale.city} onSelection={this.handleFetchWeatherData}>
          </CitySelector>
        </div>
        <WeatherDisplay weather={this.props.weather}>
        </WeatherDisplay>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  initializeDispatch: data => { dispatch(initialize(data)); },
  selectCountryDispatch: country => { dispatch(selectCountry(country)); },
  selectCityDispatch: (city, query) => {
    dispatch(selectCity(city));
    dispatch(getWeatherData(query));
  }
});

const mapStateToProps = state => ({
  locale: state.localeSelect,
  weather: state.fetchWeather,
  cities: getCities(state),
  countries: getCountries(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
