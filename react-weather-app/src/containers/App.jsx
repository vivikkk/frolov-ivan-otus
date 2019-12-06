import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import Input from '../components/Input';
import Header from '../components/Header';
import CityShort from '../components/CityShort';
import CityFull from '../components/CityFull';
import { getWeather } from '../actions/cityActions';
import { addFavoriteCity } from '../actions/favoriteActions';

class App extends Component {
  constructor(props) {
    super(props);

    this.searhChange = this.searhChange.bind(this);
    this.favoriteStatusChange = this.favoriteStatusChange.bind(this);
  }

  searhChange(event) {
    const searchInput = event.currentTarget.value;

    this.props.weatherAction(searchInput);
  }

  favoriteStatusChange(id) {
    this.props.favoriteCityAction(id);
  }

  render() {
    const { weatherAction, city, favoriteCities} = this.props;

    return(
      <Router>
        <main>
          <Header title="Weather APP" />
          <Switch>
            <Route exact path="/" render={props =>
              <section>
                <Input inputHandler = { this.searhChange } />
                <br/>
                <br/>
                <CityShort
                  getWeather={ weatherAction }
                  isFetching={ city.isFetching }
                  weather={ city.weather }
                  favoriteCities={ favoriteCities }
                  favoriteStatusChange={ this.favoriteStatusChange }
                  {...props}
                />
              </section>
            }/>
            <Route path="/:city" render={props =>
              <CityFull
                getWeather={ weatherAction }
                isFetching={ city.isFetching }
                weather={ city.weather }
                favoriteCities={ favoriteCities }
                favoriteStatusChange={ this.favoriteStatusChange }
                {...props}
              />
            }/>
          </Switch>
        </main>
      </Router>
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
    weatherAction: (city, id) => dispatch(getWeather(city, id)),
    favoriteCityAction: id => dispatch(addFavoriteCity(id))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
