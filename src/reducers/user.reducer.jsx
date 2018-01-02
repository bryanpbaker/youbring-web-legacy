import { FETCH_USER } from '../actions/auth.actions';
import { UPDATE_EVENTS } from '../actions/events.actions';

export default function (state = null, action) {
  switch (action.type) {
    default: return state;
    case FETCH_USER:
      return action.payload;
    case UPDATE_EVENTS:
      console.log(state);
      return {
        profile: action.payload.profile,
        token: state.token,
      };
  }
}
