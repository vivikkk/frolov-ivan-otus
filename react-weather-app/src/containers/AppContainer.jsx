import React, { Component } from 'react';
import City from '../components/City';
import Input from '../components/Input';
import PropTypes from 'prop-types';

class AppContainer extends Component {
  constructor(props) {
    super(props);

    this.searhChange = this.searhChange.bind(this);
    this.favoriteStatusChange = this.favoriteStatusChange.bind(this);
  }

  searhChange(event) {
    const searchInput = event.currentTarget.value;

    this.props.getWeather(searchInput.trim());
  }

  favoriteStatusChange(id) {
    this.props.addFavoriteCity(id);
  }

  render() {
    const { isFetching, weather, favoriteCities } = this.props;

    return (
      <section>
        <Input inputHandler = { this.searhChange } />
        <hr/>
        {
          isFetching ? <div>Загрузка...</div> : weather ?
          <City
            favoriteCities={ favoriteCities }
            favoriteStatusChange={ this.favoriteStatusChange }
            { ...weather }
          />
          : <div>¯\_(ツ)_/¯</div>
        }
        <hr/>
      </section>
    );
  }
}

AppContainer.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  favoriteCities: PropTypes.array.isRequired,
  weather: PropTypes.object,
  getWeather: PropTypes.func.isRequired,
  addFavoriteCity: PropTypes.func.isRequired
};

export default AppContainer;
