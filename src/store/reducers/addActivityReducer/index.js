import {
  ADDING_ACTIVITY_SUCCESS,
  ADDING_ACTIVITY_FAILURE,
} from '../../constants';

const initialState = {
  feed: [
    {
      type: 'Ace Vinayak added a note:',
      note: "He's increased his budget by a $100 per month.",
    },
  ],
};

const addActivityReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDING_ACTIVITY_SUCCESS:
      console.log(state, action.payload);
      return {
        test: action.payload,
        // MODIFY YOUR STATE ACCORDINGLY
      };

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
