import React, { Component } from 'react';
import Loader from './Loader';
import Checkbox from './Checkbox';
import LinkNav from './LinkNav';

class CityShort extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFavorite: false,
      showCity: false,
    }
  }

  componentDidMount() {
    this.props.getWeather(null);
  }

  componentWillMount() {
    this.setState({
      showCity: false
    });
  }

  componentWillReceiveProps(nextProps) {
    if ((nextProps.weather !== this.props.weather) && nextProps.weather) {
      const id = nextProps.weather.id;

      this.setState({
        showCity: true,
        isFavorite: nextProps.favoriteCities.some(item => item === id)
      });
    } else if(!nextProps.weather) {
      this.setState({
        showCity: false
      });
    }
  }

  checkboxHandler(id) {
    this.props.favoriteStatusChange(id);
    this.setState({
      isFavorite: !this.state.isFavorite
    });
  }

  render() {
    const { isFetching, weather } = this.props;

    return(
      <section>
        { (isFetching) ?
          <Loader />: this.state.showCity ?
          <div>
            <table>
              <thead>
                <tr>
                  <td>
                    <h3 style={{margin: 0}}>{ weather.name }</h3>
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Температура:</td>
                  <td>{ Math.round(weather.main.temp) } °C</td>
                </tr>
                <tr>
                  <td>Давление:</td>
                  <td>{ weather.main.pressure } мм рт. ст.</td>
                </tr>
              </tbody>
            </table>
            <br/>
            <Checkbox
              checked={ this.state.isFavorite }
              checkboxHandler={ () => this.checkboxHandler(weather.id) }
            />
            <br/>
            <br/>
            <LinkNav to={`/${weather.name.toLowerCase()}`}>Подробнее</LinkNav>
          </div>
          : <div>¯\_(ツ)_/¯</div>
        }
      </section>
    );
  }
}

export default CityShort;
