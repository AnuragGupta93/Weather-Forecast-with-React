import React, { Component } from 'react';
import SearchBar from '../containers/SearchBar';
import WeatherList from '../containers/WeatherList';

export default class App extends Component {
  render() {
    return (
      <div id="App">
        <h1 id="heading">Weather Forecast</h1>
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}
