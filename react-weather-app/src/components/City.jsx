import React, { Component } from 'react';
import Checkbox from './Checkbox'
import PropTypes from 'prop-types';

class City extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFavorite: false
    };
  }

  componentDidMount() {
    const id = this.props.id;

    this.setState({
      isFavorite: this.props.favoriteCities.some(item => item === id)
    })
  }

  checkboxHandler(id) {
    this.props.favoriteStatusChange(id);

    this.setState({
      isFavorite: !this.state.isFavorite
    });
  }

  render() {
    const { id, name, wind, main, coord } = this.props;

    return(
      <div>
        <table>
          <thead>
            <tr>
              <td>
                <strong>{ name }</strong>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Скорость ветра:</td>
              <td>{ wind.speed } m/s</td>
            </tr>
            <tr>
              <td>Температура:</td>
              <td>{ main.temp } °C</td>
            </tr>
            <tr>
              <td>Давление:</td>
              <td>{ main.pressure } hpa</td>
            </tr>
            <tr>
              <td>Координаты:</td>
              <td>[{ coord.lon.toFixed(2) }, { coord.lat.toFixed(2) }]</td>
            </tr>
          </tbody>
        </table>
        <br/>
        <Checkbox
          checked={ this.state.isFavorite }
          checkboxHandler={ () => this.checkboxHandler(id) }
        />
      </div>
    );
  }
}

City.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  wind: PropTypes.shape({
    speed: PropTypes.number.isRequired,
  }),
  main: PropTypes.shape({
    temp: PropTypes.number.isRequired,
    pressure: PropTypes.number.isRequired,
  }),
  coord: PropTypes.shape({
    lon: PropTypes.number.isRequired,
    lat: PropTypes.number.isRequired,
  }),
  favoriteStatusChange: PropTypes.func.isRequired
};

export default City;
