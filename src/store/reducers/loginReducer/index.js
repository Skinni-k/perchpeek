import { LOGIN_SUCCESS, LOGIN_FAILURE } from '../../constants';

import defaultState from '../../state';

const loginReducer = (state = defaultState, action) => {
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

    default:
      return state;
  }
};

export default loginReducer;
