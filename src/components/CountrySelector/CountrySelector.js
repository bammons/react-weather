import React, { Component } from 'react';

class CountrySelector extends Component {
  constructor(props) {
    super(props);

    this.handleCountrySelected = this.handleCountrySelected.bind(this);
  }

  handleCountrySelected(event) {
    this.props.onCountrySelected(event.target.value);
  }

  render() {
    console.log('rerender countries');
    return (
      <select value={this.props.country} onChange={this.handleCountrySelected} className="select__locale">
        <option value="" disabled selected>Select a Country...</option>
        {this.props.countries.map((value) => (
          <option key={value} value={value}>{value}</option>
        ))}
      </select>
    );
  }
}

export default CountrySelector;
