import { USER_LOGIN } from '../../constants/actionTypes';

const INIT_STATE = {
  token: '',
  loginUser: {},
};

const Auth = (state = INIT_STATE, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        token: action.payload.token,
        loginUser: action.payload.loginUser,
      };
    default:
      return { ...state };
  }
};
export default Auth;
