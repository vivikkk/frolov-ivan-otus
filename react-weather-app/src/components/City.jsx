import React from 'react';
import Checkbox from './Checkbox'

class City extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <h3>{this.props.city.name}</h3>
        <p>Скорость ветра: {this.props.city.wind.speed} m/s,</p>
        <p>Температура: {this.props.city.main.temp} °C</p>
        <p>Давление: {this.props.city.main.pressure} hpa</p>
        <p>Координаты: [{this.props.city.coord.lon.toFixed(2)}, {this.props.city.coord.lat.toFixed(2)}]</p>

        <Checkbox
          checked={this.props.city.isFavorite ? true : false}
          checkboxHandler={() => this.props.onFavoriteStatusChange(this.props.city.id)}
        />
        <hr/>
      </div>
    );
  }
}

export default City;
