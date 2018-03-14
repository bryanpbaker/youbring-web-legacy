import { FETCH_ALL_EVENTS, CLEAR_ALL_EVENTS, UPDATE_EVENTS } from '../actions/events.actions';

export default function (state = null, action) {
  switch (action.type) {
    default: return state;
    case FETCH_ALL_EVENTS:
      return action.payload;
    case UPDATE_EVENTS:
      return action.payload;
    case CLEAR_ALL_EVENTS:
      return null;
  }
}
