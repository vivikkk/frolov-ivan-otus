import React from 'react';

const CardWeather = (props) => {
  return (
    <div style={props.style}>
      <p><strong>Температура</strong>:<br/> {Math.round(props.main.temp) } °C</p>
      <p><strong>Давление</strong>:<br/> {props.main.pressure} мм рт. ст.</p>
      <p><strong>Дата и время</strong>:<br/> {props.dt_txt}</p>
    </div>
  );
}

export default CardWeather;
