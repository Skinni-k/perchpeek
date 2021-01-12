import {
  ADDING_ACTIVITY_SUCCESS,
  ADDING_ACTIVITY_FAILURE,
  CLEAR_ACTIVITIES_SUCCESS,
  CLEAR_ACTIVITIES_FAILURE,
} from '../../constants';

const initialState = [];

const activityReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDING_ACTIVITY_SUCCESS:
      let updatedState = [...state];
      if (Array.isArray(action.payload)) {
        updatedState = updatedState.concat(action.payload);
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

    case CLEAR_ACTIVITIES_SUCCESS:
      return initialState;

    case CLEAR_ACTIVITIES_FAILURE:
      return {
        ...state,
        // MODIFY YOUR STATE ACCORDINGLY
      };

    default:
      return state;
  }
};

export default activityReducer;
