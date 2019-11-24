import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import CitiesList from './AppContainer';
import { getWeather } from '../actions/cityActions';
import { addFavoriteCity } from '../actions/favoriteActions';

class App extends Component {
  render() {
    const { weatherAction, favoriteCityAction, city, favoriteCities} = this.props;

    return(
      <main>
        <Header title="Weather APP" />
        <CitiesList
          isFetching={ city.isFetching }
          weather={ city.weather }
          getWeather={ weatherAction }
          favoriteCities={ favoriteCities }
          addFavoriteCity={ favoriteCityAction }
        />
      </main>
    );
  }
}

App.propTypes = {
  weatherAction: PropTypes.func.isRequired,
  favoriteCityAction: PropTypes.func.isRequired,
  city: PropTypes.object.isRequired,
  favoriteCities: PropTypes.array.isRequired
};

const mapStateToProps = store => {
  return {
    city: store.city,
    favoriteCities: store.favoriteCities
  };
};

const mapDispatchToProps = dispatch => {
  return {
    weatherAction: city => dispatch(getWeather(city)),
    favoriteCityAction: id => dispatch(addFavoriteCity(id))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
