import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
// import dummyReducer2 from './dummyReducer2/dummyReducer2';

const rootReducer = combineReducers({
  user: loginReducer,
  // dummyReducer2,
});

export default rootReducer;
