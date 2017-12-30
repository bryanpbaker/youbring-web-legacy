import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import user from './user.reducer';
import errors from './errors.reducer';
import isAuthenticated from './authorization.reducer';

const rootReducer = combineReducers({
  user,
  form,
  errors,
  isAuthenticated,
});

export default rootReducer;
