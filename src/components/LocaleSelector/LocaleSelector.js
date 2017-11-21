import React, { Component } from 'react';
import './LocaleSelector.css';
import '../../weather-icons/css/weather-icons.min.css';

class LocaleSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: Object.keys(props.locale),
      cities: [],
      city: '',
      country: '',
    };

    this.handleCountrySelected = this.handleCountrySelected.bind(this);
    this.handleCitySelected = this.handleCitySelected.bind(this);
  }

  handleCountrySelected(event) {
    this.setState({
      cities: this.props.locale[event.target.value],
      country: event.target.value,
      city: ''
    });
  }

  handleCitySelected(event) {
    this.setState({
      city: event.target.value
    });
    this.props.onSelection(event.target.value, this.state.country);
  }

  componentDidUpdate() {
    if(this.props.locale && !this.state.countries.length) {
      this.setState({
        countries: Object.keys(this.props.locale)
      });
    }
  }

  render() {
    return (
      <div className="locale-container">
        <select value={this.state.country} onChange={this.handleCountrySelected} className="select__locale">
          <option value="" disabled selected>Select a Country...</option>
          {this.state.countries.map((value) => (
            <option key={value} value={value}>{value}</option>
          ))}
        </select>
        {this.state.country !== '' ?
        <select value={this.state.city} onChange={this.handleCitySelected} className="select__locale">
          <option value="" disabled selected>Select a City...</option>
          {this.state.cities.map((value, i) => (
            <option key={i} value={value}>{value}</option>
          ))}
        </select> :
        null}
      </div>
    );
  }
}

export default LocaleSelector;
