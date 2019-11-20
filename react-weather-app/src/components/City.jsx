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
        <div>
          <h3>{this.props.name}</h3>
          <p>Скорость ветра: {this.props.wind.speed} m/s,</p>
          <p>Температура: {this.props.main.temp} °C</p>
          <p>Давление: {this.props.main.pressure} hpa</p>
          <p>Координаты: [{this.props.coord.lon.toFixed(2)}, {this.props.coord.lat.toFixed(2)}]</p>
          <Checkbox
            checked={this.props.isFavorite}
            checkboxHandler={() => this.props.onFavoriteStatusChange(this.props.id)}
          />
        </div>
      </div>
    );
  }
}

City.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  wind: PropTypes.shape({
    speed: PropTypes.number
  }),
  main: PropTypes.shape({
    temp: PropTypes.number,
    pressure: PropTypes.number,
  }),
  coord: PropTypes.shape({
    lon: PropTypes.number,
    lat: PropTypes.number
  }),
  onFavoriteStatusChange: PropTypes.func
};

export default City;
