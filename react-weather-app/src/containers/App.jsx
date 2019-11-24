import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import CitiesList from '../components/CitiesList';
import { getWeather } from '../actions';

class App extends Component {
  render() {
    const { getWeatherAction, city } = this.props;

    return(
      <main>
        <Header title="Weather APP" />
        <CitiesList
          isFetching={ city.isFetching }
          weather={ city.weather }
          getWeather={ getWeatherAction }
        />
      </main>
    );
  }
}

const mapStateToProps = store => {
  return {
    city: store.city
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getWeatherAction: year => dispatch(getWeather(year)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
