import { LOGOUT_SUCCESS, LOGOUT_FAILURE } from '../constants';

const success = () => {
  return {
    type: LOGOUT_SUCCESS,
  };
};

const failure = (error) => {
  return {
    type: LOGOUT_FAILURE,
    error,
  };
};

export const logoutAction = (data) => {
  return (dispatch) => {
    setTimeout(() => {
      if (data) {
        dispatch(success());
      } else {
        dispatch(failure('Logout Failed!'));
      }
    }, 500);
  };
};
