import { combineReducers } from 'redux';
import { routeSelectReducer } from './route-select-reducer';
import { ticketInfoReducer } from './ticket-info-reducer';
import { routeInfoReducer } from './route-info-reducer';

export const rootReducer = combineReducers({
  route: routeSelectReducer,
  ticket: ticketInfoReducer,
  routeInfo: routeInfoReducer,
});
