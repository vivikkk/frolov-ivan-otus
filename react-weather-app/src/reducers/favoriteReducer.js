import { CHANGE_FAVORITE_CITY } from '../actions/favoriteActions';

export const initialState = [];

export function favoriteReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_FAVORITE_CITY:
      const favoriteCities = state;
      const index = favoriteCities.indexOf(action.payload);

      if (index !== -1) {
        favoriteCities.splice(index, 1);
        return favoriteCities;
      }

      return state.concat(action.payload)

    default:
      return state
  }
}

