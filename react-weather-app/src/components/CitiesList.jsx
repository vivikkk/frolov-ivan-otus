import React from 'react';
import City from './City';
import Input from './Input';

const API_URL = 'https://api.openweathermap.org/data/2.5/weather?'
const API_KEY = 'd4d7737620b5cf3db260c35e7a1be93d';

class CitiesList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      city: {},
      favoriteCities: []
    };
    this.searhChange = this.searhChange.bind(this);
    this.getCityWeather = this.getCityWeather.bind(this);
    this.favoriteStatusChange = this.favoriteStatusChange.bind(this);
  }

  async getCityWeather(searchString) {
    const url = `${API_URL}q=${searchString}&appid=${API_KEY}&units=metric`;
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();

      return data;
    }
  }

  async searhChange(event) {
    const searchInput = event.currentTarget.value;
    const result = await this.getCityWeather(searchInput);

    if (result) {
      this.setState({
        city: result
      });
    } else {
      this.setState({
        city: {}
      });
    }
  }

  favoriteStatusChange(id) {
    const favoriteCities = this.state.favoriteCities;
    const index = favoriteCities.indexOf(id);

    if (index !== -1) {
      favoriteCities.splice(index, 1);
      this.setState({
        favoriteCities: [...favoriteCities]
      });
    } else {
      this.setState({
        favoriteCities: [...favoriteCities, id]
      });
    }
  }

  render() {
    return (
      <section>
        <Input searchInputHandler={ this.searhChange } />
        <hr/>
        {
          Object.keys(this.state.city).length ?
          <City
            onFavoriteStatusChange = { this.favoriteStatusChange }
            isFavorite = { this.state.favoriteCities.some(id => id === this.state.city.id) }
            { ...this.state.city }
          />
          : <div>Пусто</div>
        }
        <hr/>
      </section>
    );
  }
}

export default CitiesList;
