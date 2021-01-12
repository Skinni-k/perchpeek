import {
  CLEAR_ACTIVITIES_SUCCESS,
  CLEAR_ACTIVITIES_FAILURE,
} from '../constants';

const success = () => {
  return {
    type: CLEAR_ACTIVITIES_SUCCESS,
  };
};

const failure = (error) => {
  return {
    type: CLEAR_ACTIVITIES_FAILURE,
    error,
  };
};

export const clearActivityAction = () => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(success());
    }, 500);
  };
};
