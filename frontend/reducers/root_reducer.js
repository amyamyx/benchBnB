import { combineReducers } from 'redux';
import errorsReducer from './errors_reducer';
import sessionReducer from './session_reducer';
import entitiesReducer from './entities_reducer';

const rootReducer = combineReducers({
  entites: entitiesReducer,
  session: sessionReducer,
  errors: errorsReducer
});

export default rootReducer;