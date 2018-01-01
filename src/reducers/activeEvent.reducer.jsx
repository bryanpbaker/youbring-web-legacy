import { FETCH_EVENT, CLEAR_EVENT } from '../actions/events.actions';

export default function (state = null, action) {
  switch (action.type) {
    default: return state;
    case FETCH_EVENT:
      return action.payload;
    case CLEAR_EVENT:
      return null;
  }
}
