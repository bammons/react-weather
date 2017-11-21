import React, { Component } from 'react';
import PropTypes from 'prop-types'
import LocaleSelector from '../../components/LocaleSelector/LocaleSelector';
import WeatherDisplay from '../../components/WeatherDisplay/WeatherDisplay';
import { initialize, getWeatherData } from '../../actions/actions';
import { connect } from 'react-redux'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    props.store.dispatch(initialize(props.countryData));
    this.handleFetchWeatherData = this.handleFetchWeatherData.bind(this);
  }

  handleFetchWeatherData(city, country) {
    var queryString = city + ',' + this.props.locale.codes[country];
    this.props.store.dispatch(getWeatherData({q: queryString}));
  }

  render() {
    return (
      <div className="App">
        <LocaleSelector locale={this.props.locale} onSelection={this.handleFetchWeatherData}>
        </LocaleSelector>
        <WeatherDisplay weather={this.props.weather}>
        </WeatherDisplay>
      </div>
    );
  }
}

App.propTypes = {
  store: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  locale: state.localeSelect,
  weather: state.fetchWeather
});

export default connect(mapStateToProps)(App);
