import { combineReducers } from 'redux'
import dummyReducer1 from "./dummyReducer1/dummyReducer1";
import dummyReducer2 from './dummyReducer2/dummyReducer2';

const rootReducer = combineReducers({
  dummyReducer1,
  dummyReducer2,
})
  
export default rootReducer
