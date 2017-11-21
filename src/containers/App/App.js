import React, { Component } from 'react';
import LocaleSelector from '../../components/LocaleSelector/LocaleSelector';
import WeatherDisplay from '../../components/WeatherDisplay/WeatherDisplay';
import { initialize, selectCountry, selectCity, getWeatherData } from '../../actions/actions';
import { connect } from 'react-redux'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    props.initializeDispatch(props.countryData);
    this.handleFetchWeatherData = this.handleFetchWeatherData.bind(this);
  }

  handleFetchWeatherData(city, country) {
    this.props.selectCityDispatch(city, {q: `${city},${this.props.locale.data.codes[country]}`});
  }

  render() {
    return (
      <div className="App">
        <LocaleSelector locale={this.props.locale} onSelection={this.handleFetchWeatherData} onCountrySelected={this.props.selectCountryDispatch}>
        </LocaleSelector>
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
  weather: state.fetchWeather
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
