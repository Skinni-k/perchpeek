import { ADDING_ACTIVITY_SUCCESS, ADDING_ACTIVITY_FAILURE } from '../constants';

const success = (payload) => {
  return {
    type: ADDING_ACTIVITY_SUCCESS,
    payload,
  };
};

const failure = (error) => {
  return {
    type: ADDING_ACTIVITY_FAILURE,
    error,
  };
};

export const addActivityAction = (data) => {
  return (dispatch) => {
    /*
    
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Make your asynchronous calls here ~~~~~~~~~~~~~~~~~~~~~~~~~

    fetch('http://example.com')
    .then((response)=>{
      dispatch(success(response));
    })
    .catch((error)=> {
      dispatch(failure(error));
    })
    */

    // For this project let's add data the following way
    setTimeout(() => {
      dispatch(success(data));
    }, 500);
  };
};
