import { FETCH_ALL_EVENTS } from '../actions/events.actions';

export default function (state = [], action) {
  switch (action.type) {
    default: return state;
    case FETCH_ALL_EVENTS:
      return action.payload;
  }
}
