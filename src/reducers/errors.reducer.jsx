import { FETCH_USER, AUTH_ERROR, CREATE_USER_ERROR } from '../actions/auth.actions';

export default function (state = {}, action) {
  switch (action.type) {
    default: return state;
    case AUTH_ERROR:
      return {
        ...state,
        authErrors: action.payload,
      };
    case CREATE_USER_ERROR:
      return {
        ...state,
        createUserErrors: action.payload,
      };
    case FETCH_USER:
      return Object.keys(state)
        .filter(key => key !== 'authErrors')
        .reduce((newState, current) => {
          newState[current] = state[current];
          return newState;
        }, {});
  }
}
