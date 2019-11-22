import React from 'react';
import Config from '../config';
import City from './City';
import Input from './Input';

class CitiesList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      city: null,
      favoriteCities: []
    };
    this.searhChange = this.searhChange.bind(this);
    this.getCityWeather = this.getCityWeather.bind(this);
    this.favoriteStatusChange = this.favoriteStatusChange.bind(this);
  }

  componentDidMount() {
    this.getCityWeather()
  }

  async getCityWeather(searchString) {
    const url = `${Config.API_URL}q=${searchString}&appid=${Config.API_KEY}&units=metric`;
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
        city: null
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
        <Input searchInputHandler = { this.searhChange } />
        <hr/>
        {
          this.state.city ?
          <City
            onFavoriteStatusChange = { this.favoriteStatusChange }
            isFavorite = { this.state.favoriteCities.some(id => id === this.state.city.id) }
            { ...this.state.city }
          />
          : <div>¯\_(ツ)_/¯</div>
        }
        <hr/>
      </section>
    );
  }
}

export default CitiesList;
