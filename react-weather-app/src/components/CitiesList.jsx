import React from 'react';
import City from './City';
import Input from './Input';
import PropTypes from 'prop-types';

class CitiesList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cities: this.props.cities,
    };

    this.favoriteStatusChange = this.favoriteStatusChange.bind(this);
    this.searhChange = this.searhChange.bind(this);
  }

  componentDidMount() {
    let cities = this.state.cities;

    cities.forEach((item) => {
      item.isFavorite = false;
    });

    this.setState({ cities });
  }

  favoriteStatusChange(id) {
    const cities = this.state.cities;
    const currentCity = cities.find(city => city.id === id);

    currentCity.isFavorite = !currentCity.isFavorite;
    this.setState({ cities });
  }

  searhChange(event) {
    const searchInput = event.currentTarget.value;
    const cities = this.props.cities.filter(item => {
      return item.name.toLowerCase().includes(searchInput.toLowerCase())
    });

    this.setState({ cities });
  }

  render() {
    return(
      <section>
        <Input
          searchInputHandler={this.searhChange}
        />
        <br/>
        {this.state.cities.map(city => {
          return(
            <City
              key={city.id}
              onFavoriteStatusChange={this.favoriteStatusChange}
              {...city}
            />
          );
        })}
      </section>
    );
  }
}

CitiesList.propTypes = {
  cities: PropTypes.array.isRequired
};

export default CitiesList;
