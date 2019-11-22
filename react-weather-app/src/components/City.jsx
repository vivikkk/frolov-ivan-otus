import React from 'react';
import Checkbox from './Checkbox'
import PropTypes from 'prop-types';

class City extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {name, wind, main, coord, isFavorite} = this.props;

    return(
      <div>
        <table>
          <thead>
            <tr>
              <td>
                <strong>{name}</strong>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Скорость ветра:</td>
              <td>{wind.speed} m/s</td>
            </tr>
            <tr>
              <td>Температура:</td>
              <td>{main.temp} °C</td>
            </tr>
            <tr>
              <td>Давление:</td>
              <td>{main.pressure} hpa</td>
            </tr>
            <tr>
              <td>Координаты:</td>
              <td>[{coord.lon.toFixed(2)}, {coord.lat.toFixed(2)}]</td>
            </tr>
          </tbody>
        </table>
        <br/>
        <Checkbox
          checked={isFavorite}
          checkboxHandler={() => this.props.onFavoriteStatusChange(this.props.id)}
        />
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
