import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import user from './user.reducer';
import events from './events.reducer';
import errors from './errors.reducer';
import isAuthorized from './authorization.reducer';
import activeEvent from './activeEvent.reducer';

const rootReducer = combineReducers({
  user,
  events,
  form,
  errors,
  isAuthorized,
  activeEvent,
});

export default rootReducer;
