import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import user from './user.reducer';
import errors from './errors.reducer';
import isAuthenticated from './authorization.reducer';
import activeEvent from './activeEvent.reducer';

const rootReducer = combineReducers({
  user,
  form,
  errors,
  isAuthenticated,
  activeEvent,
});

export default rootReducer;
