import {
  ADDING_ACTIVITY_SUCCESS,
  ADDING_ACTIVITY_FAILURE,
} from '../../constants';

const initialState = [];

const addActivityReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDING_ACTIVITY_SUCCESS:
      let updatedState = [...state];
      if (Array.isArray(action.payload)) {
        console.log('Inside If', action.payload);
        updatedState = updatedState.concat(action.payload);
        console.log('Inside If updatedState', updatedState);
      } else {
        updatedState.push(action.payload);
      }
      localStorage.setItem('activities', JSON.stringify(updatedState));
      return updatedState;

    case ADDING_ACTIVITY_FAILURE:
      return {
        ...state,
        // MODIFY YOUR STATE ACCORDINGLY
      };

    default:
      return state;
  }
};

export default addActivityReducer;
