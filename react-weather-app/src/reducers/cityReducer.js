import { GET_WEATHER_REQUEST, GET_WEATHER_SUCCESS, GET_WEATHER_ERROR } from '../actions/cityActions';

export const initialState = {
  name: null,
  weather: null,
  isFetching: false,
  isFavorite: false
};

export function cityReducer(state = initialState, action) {
  switch (action.type) {
    case GET_WEATHER_REQUEST:
      return {
        ...state,
        name: action.payload,
        isFetching: true
      }

    case GET_WEATHER_SUCCESS:
      return {
        ...state,
        weather: action.payload,
        isFetching: false
      }

    case GET_WEATHER_ERROR:
      return { ...state,
        name: null,
        weather: null,
        isFetching: false
      }

    default:
      return state
  }
}
