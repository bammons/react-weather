import React, { Component } from 'react';

class CitySelector extends Component {
  constructor(props) {
    super(props);

    this.handleCitySelected = this.handleCitySelected.bind(this);
  }

  handleCitySelected(event) {
    this.props.onSelection(event.target.value);
  }

  render() {
    console.log('rerender cities');
    return (
      <span>
        {this.props.cities.length ?
        <select value={this.props.city} onChange={this.handleCitySelected} className="select__locale">
          <option value="" disabled selected>Select a City...</option>
          {this.props.cities.map((value, i) => (
            <option key={i} value={value}>{value}</option>
          ))}
        </select> :
        null}
      </span>
    );
  }
}

export default CitySelector;
