export const SET_ROUTE = 'SET_ROUTE';
export const SET_CITY_FROM = 'SET_CITY_FROM';
export const SET_CITY_TO = 'SET_CITY_TO';
export const GET_CITIES_REQUEST = 'GET_CITIES_REQUEST';
export const GET_CITY_TO_SUCCESS = 'GET_CITY_TO_SUCCESS';
export const GET_CITY_FROM_SUCCESS = 'GET_CITY_FROM_SUCCESS';
export const SET_DATE_RETURN = 'SET_DATE_RETURN';
export const SET_DATE_START = 'SET_DATE_START';

export function getCityTo(route) {
  return (dispatch) => {
    dispatch({ type: GET_CITIES_REQUEST, payload: route });
    setTimeout(() => {
      dispatch({
        type: GET_CITY_TO_SUCCESS,
        payload: ['Тбилиси', 'Ереван', 'Одесса'],
      });
      dispatch({
        type: GET_CITY_FROM_SUCCESS,
        payload: ['Пятигорск', 'Георгиевск', 'Мин-Воды'],
      });
    }, 5000);
  };
}

export function setRoute(route) {
  return {
    type: SET_ROUTE,
    payload: route,
  };
}

export function setCityFrom(city) {
  return {
    type: SET_CITY_FROM,
    payload: city,
  };
}

export function setCityTo(city) {
  return {
    type: SET_CITY_TO,
    payload: city,
  };
}
export function setDateStart(date) {
  return {
    type: SET_DATE_START,
    payload: date,
  };
}
export function setDateReturn(date) {
  return {
    type: SET_DATE_RETURN,
    payload: date,
  };
}
