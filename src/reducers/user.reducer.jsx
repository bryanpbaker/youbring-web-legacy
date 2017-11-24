import { FETCH_USER, FACEBOOK_AUTH } from '../actions/auth.actions';

export default function (state = null, action) {
  switch (action.type) {
    default: return state;
    case FETCH_USER:
      return action.payload;
  }
}
