import {
  SET_ROUTE,
  SET_CITY_FROM,
  SET_CITY_TO,
  SET_DATE_START,
  SET_DATE_RETURN,
} from '../actions/route-actions';

const initialState = {
  route: null,
  cityFrom: null,
  cityTo: null,
  dateStart: undefined,
  dateReturn: undefined,
};

export function routeInfoReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ROUTE:
      return { ...state, route: action.payload };
    case SET_CITY_FROM:
      return { ...state, cityFrom: action.payload };
    case SET_CITY_TO:
      return { ...state, cityTo: action.payload };
    case SET_DATE_START:
      return { ...state, dateStart: action.payload };
    case SET_DATE_RETURN:
      return { ...state, dateReturn: action.payload };
    default:
      return state;
  }
}
