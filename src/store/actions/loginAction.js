import { LOGIN_SUCCESS, LOGIN_FAILURE } from '../constants';

const validUser = {
  email: 'ace@perchpeek.com',
  password: 'perchpeek',
};

const success = (payload) => {
  return {
    type: LOGIN_SUCCESS,
    payload,
  };
};

const failure = (error) => {
  return {
    type: LOGIN_FAILURE,
    error,
  };
};

export const loginAction = (data) => {
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

    // For this project let's verify data the following way
    setTimeout(() => {
      if (
        data.email === validUser.email &&
        data.password === validUser.password
      ) {
        dispatch(success({ email: data.email, username: 'Ace Vinayak' }));
      } else {
        dispatch(failure('Incorrect Email or Password'));
      }
    }, 500);
  };
};
