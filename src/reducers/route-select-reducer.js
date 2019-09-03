import {
  GET_CITIES_REQUEST,
  GET_CITY_TO_SUCCESS,
  GET_CITY_FROM_SUCCESS,
} from '../actions/route-actions';

const initialState = {
  routes: ['Пятигорск-Москва', 'Пятигорск-Анапа', 'Лазаревское-Пятигорск'],
  citiesFrom: [],
  citiesTo: [],
  citiesStart: [],
  isFetching: false,
};

export function routeSelectReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CITIES_REQUEST:
      return {
        ...state,
        routeInfo: { ...state.routeInfo, route: action.payload },
        isFetching: true,
      };
    case GET_CITY_TO_SUCCESS:
      return { ...state, citiesTo: action.payload, isFetching: false };
    case GET_CITY_FROM_SUCCESS:
      return { ...state, citiesFrom: action.payload, isFetching: false };
    default:
      return state;
  }
}
