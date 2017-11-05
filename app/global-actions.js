import {
  SET_AUTH,
  SET_USER,
  SET_USER_DATA,
  FETCH_LOGIN,
  LOGIN_REQUEST,
  LOGOUT,
  REQUEST_ERROR,
  CLEAR_ERROR,
  SENDING_REQUEST,
} from 'global-constants';


export const setAuthState = (newAuthState) => ({
  type: SET_AUTH,
  newAuthState,
});

export const setUser = (data) => ({
  type: SET_USER,
  data,
});

export const setUserData = (data) => ({
  type: SET_USER_DATA,
  data,
});

export const fetchLogin = () => ({
  type: FETCH_LOGIN,
});

export const sendingRequest = (isSending) => ({
  type: SENDING_REQUEST,
  isSending,
});

export const loginRequest = (data) => ({
  type: LOGIN_REQUEST,
  data,
});

export const logout = () => ({
  type: LOGOUT,
});

export const requestError = (error) => ({
  type: REQUEST_ERROR,
  error,
});

export const clearError = () => ({
  type: CLEAR_ERROR,
});
