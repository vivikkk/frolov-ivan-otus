import React, { Component } from 'react';
import City from './City';
import Input from './Input';

class CitiesList extends Component {
  constructor(props) {
    super(props);

    this.searhChange = this.searhChange.bind(this);
  }

  searhChange(event) {
    const searchInput = event.currentTarget.value;

    this.props.getWeather(searchInput);
  }

  render() {
    const { isFetching, weather } = this.props;

    return (
      <section>
        <Input searchInputHandler = { this.searhChange } />
        <hr/>
        {
          isFetching ? <div>Загрузка...</div> : weather ?
          <City { ...weather } />
          : <div>¯\_(ツ)_/¯</div>
        }
        <hr/>
      </section>
    );
  }
}

export default CitiesList;
