import React, { Component } from 'react';
import './WeatherDisplay.css';
import '../../weather-icons/css/weather-icons.min.css';

class WeatherDisplay extends Component {
  constructor(props) {
    super(props);

    this.getWeatherContent = this.getWeatherContent.bind(this);
  }

  getWeatherContent() {
    return (
      <div className="weather">
        <i className={`wi wi-owm-${this.props.weather.weather[0].id}`}></i>
        <div className="weather__description">{this.props.weather.weather[0].description} <span className="weather__temp">{this.props.weather.main.temp}K</span></div>
        <div className="weather__temp--high">High: {this.props.weather.main.temp_max}K</div>
        <div className="weather__temp--low">Low: {this.props.weather.main.temp_min}K</div>
        <div className="weather__humidity">Humidity: {this.props.weather.main.humidity}%</div>
      </div>
    );
  };

  render() {
    return Object.keys(this.props.weather).length ?  this.getWeatherContent() : <div></div>;
  }
}

export default WeatherDisplay;
