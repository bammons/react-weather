import React, { Component } from 'react';
import './LocaleSelector.css';
import '../../weather-icons/css/weather-icons.min.css';

class LocaleSelector extends Component {
  constructor(props) {
    super(props);

    this.handleCountrySelected = this.handleCountrySelected.bind(this);
    this.handleCitySelected = this.handleCitySelected.bind(this);
  }

  handleCountrySelected(event) {
    this.props.onCountrySelected(event.target.value);
  }

  handleCitySelected(event) {
    this.props.onSelection(event.target.value, this.props.locale.country);
  }

  render() {
    return (
      <div className="locale-container">
        <select value={this.props.locale.country} onChange={this.handleCountrySelected} className="select__locale">
          <option value="" disabled selected>Select a Country...</option>
          {this.props.locale.countries.map((value) => (
            <option key={value} value={value}>{value}</option>
          ))}
        </select>
        {this.props.locale.country !== '' ?
        <select value={this.props.locale.city} onChange={this.handleCitySelected} className="select__locale">
          <option value="" disabled selected>Select a City...</option>
          {this.props.locale.cities.map((value, i) => (
            <option key={i} value={value}>{value}</option>
          ))}
        </select> :
        null}
      </div>
    );
  }
}

export default LocaleSelector;
