import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import addActivityReducer from './addActivityReducer';

const rootReducer = combineReducers({
  user: loginReducer,
  activities: addActivityReducer,
});

export default rootReducer;
