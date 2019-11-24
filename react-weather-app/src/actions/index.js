import Config from '../config';

export const GET_WEATHER_REQUEST = 'GET_WEATHER_REQUEST';
export const GET_WEATHER_SUCCESS = 'GET_WEATHER_SUCCESS';
export const GET_WEATHER_ERROR = 'GET_WEATHER_ERROR';

export function getWeather(searchString) {
  const url = `${Config.API_URL}q=${searchString}&appid=${Config.API_KEY}&units=metric`;

  return dispatch => {
    dispatch({
      type: GET_WEATHER_REQUEST,
      payload: searchString,
    })

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        return response;
      })
      .then((response) => response.json())
      .then((weather) => dispatch({
        type: GET_WEATHER_SUCCESS,
        payload: weather
      }))
      .catch(() => dispatch({
        type: GET_WEATHER_ERROR
      }));
  }
}
