import { USER_AUTH } from '../actions/auth.actions';

export default function (state = null, action) {
  switch (action.type) {
    default: return state;
    case USER_AUTH:
      return action.payload;
  }
}
