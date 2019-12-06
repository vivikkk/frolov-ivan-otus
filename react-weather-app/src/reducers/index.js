import { combineReducers } from 'redux';
import { cityReducer } from './cityReducer';
import { favoriteReducer } from './favoriteReducer';

export const rootReducer = combineReducers({
  city: cityReducer,
  favoriteCities: favoriteReducer
});
