import { DUMMY_ACTION_CONSTANT, DUMMY_ACTION_CONSTANT_1 } from '../../constants';

const initialState = {

  // YOUR INITIAL STATE

}

const dummyReducer1 = (state = initialState, action) => {
    switch (action.type) {
      
      case DUMMY_ACTION_CONSTANT: return {
        ...state,
        // MODIFY YOUR STATE ACCORDINGLY
      }
  
      case DUMMY_ACTION_CONSTANT_1: return {
        ...state,
        // MODIFY YOUR STATE ACCORDINGLY
      }

    default: return state
  }
}
  
  export default dummyReducer1