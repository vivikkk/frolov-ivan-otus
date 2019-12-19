import React, { Component } from 'react';
import Checkbox from './Checkbox';
import Loader from './Loader';
import LinkNav from './LinkNav';
import CardWeather from './CardWeather';
import NotFound from './NotFound';

class CityFull extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFavorite: false,
      showCity: false
    }
  }

  componentDidMount() {
    this.props.weatherAction(this.props.match.params.city, true);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.city.weather !== this.props.city.weather) {
      const id = this.props.city.weather.city.id;

      this.setState({
        showCity: true,
        isFavorite: this.props.favoriteCities.some(item => item === id)
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
    const { isFetching, weather } = this.props.city;

    const cardStyle = {
      marginBottom: '20px',
      marginRight: '20px',
      border: '1px solid #000',
      padding: '0 10px',
      flex: '0 0 200px'
    };

    return(
      <section>
        <LinkNav to="/">На главную<br/></LinkNav>
        { (isFetching) ?
          <Loader /> : this.state.showCity ?
          <div>
            <h3>{ weather.city.name }</h3>
            <div style={{display: 'flex', overflowX: 'auto', marginBottom: '20px'}}>
              {weather.list
                .filter((item, index) => index % 2 === 0)
                .map(
                  weather => {
                    return (
                      <CardWeather
                        key={weather.dt}
                        style={cardStyle}
                        {...weather}
                      />
                    );
                  }
                )}
            </div>
            <Checkbox
              checked={ this.state.isFavorite }
              checkboxHandler={ () => this.checkboxHandler(weather.city.id) }
            />
          </div>
          : <NotFound />
        }
      </section>
    );
  }
}

export default CityFull;
