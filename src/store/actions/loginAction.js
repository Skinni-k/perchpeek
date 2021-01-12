import { LOGIN_SUCCESS, LOGIN_FAILURE } from '../constants';

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
    setTimeout(() => {
      if (data) {
        dispatch(success(data));
      } else {
        dispatch(failure('Incorrect Email or Password'));
      }
    }, 500);
  };
};
