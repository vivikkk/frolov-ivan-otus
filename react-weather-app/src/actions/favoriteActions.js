export const CHANGE_FAVORITE_CITY = 'CHANGE_FAVORITE_CITY';

export function addFavoriteCity(id) {
  return dispatch => {
    dispatch({
      type: CHANGE_FAVORITE_CITY,
      payload: id
    })
  }
}
