import { combineReducers } from 'redux';
import authReducer from './authReducer';
import activityReducer from './activityReducer';

const rootReducer = combineReducers({
  user: authReducer,
  activities: activityReducer,
});

export default rootReducer;
