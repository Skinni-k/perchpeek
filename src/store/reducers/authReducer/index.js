import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
} from '../../constants';

const initialState = { credentials: undefined, error: undefined };

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      localStorage.setItem('user', JSON.stringify(action.payload));
      return {
        ...state,
        credentials: action.payload,
        error: undefined,
      };

    case LOGIN_FAILURE:
      return {
        ...state,
        credentials: undefined,
        error: action.error,
      };

    case LOGOUT_SUCCESS:
      localStorage.clear();
      return initialState;

    case LOGOUT_FAILURE:
      alert(action.error);
      return {
        ...state,
        error: action.error,
      };

    default:
      return state;
  }
};

export default authReducer;
