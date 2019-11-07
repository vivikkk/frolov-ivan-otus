import React from 'react';
import Checkbox from './Checkbox'
import PropTypes from 'prop-types';

class City extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <h3>{this.props.name}</h3>
        <p>Скорость ветра: {this.props.wind.speed} m/s,</p>
        <p>Температура: {this.props.main.temp} °C</p>
        <p>Давление: {this.props.main.pressure} hpa</p>
        <p>Координаты: [{this.props.coord.lon.toFixed(2)}, {this.props.coord.lat.toFixed(2)}]</p>

        <Checkbox
          checked={this.props.isFavorite ? true : false}
          checkboxHandler={() => this.props.onFavoriteStatusChange(this.props.id)}
        />
        <hr/>
      </div>
    );
  }
}

City.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  wind: PropTypes.shape({
    speed: PropTypes.number.isRequired
  }),
  main: PropTypes.shape({
    temp: PropTypes.number.isRequired,
    pressure: PropTypes.number.isRequired,
  }),
  coord: PropTypes.shape({
    lon: PropTypes.number.isRequired,
    lat: PropTypes.number.isRequired
  }),
  onFavoriteStatusChange: PropTypes.func.isRequired
};

export default City;
