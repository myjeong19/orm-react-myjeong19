import {
  USER_LOGIN,
  API_FAILED,
  LOGIN_USER,
} from '../../constants/actionTypes';

export const loginUser = (email, password, navigate) => ({
  type: LOGIN_USER,
  payload: { email, password, navigate },
});

export const userLogin = (token, loginUser) => ({
  type: USER_LOGIN,
  payload: { token, loginUser },
});

export const apiError = error => ({
  type: API_FAILED,
  payload: error,
});
