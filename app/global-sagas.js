import { take, call, put, fork, race } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import auth from './auth';
import {
  SET_AUTH,
  SET_USER,
  REQUEST_ERROR,
  SENDING_REQUEST,
  LOGIN_REQUEST,
  FETCH_LOGIN,
  LOGOUT,
  CLEAR_ERROR,
} from './global-constants';

export function* authorize({ email, password }) {
  yield put({ type: SENDING_REQUEST, isSending: true });
  let response;

  try {
    response = yield call(auth.login, email, password);
    return response;
  } catch (error) {
    yield put({ type: REQUEST_ERROR, error: error.message });
    return false;
  } finally {
    yield put({ type: SENDING_REQUEST, isSending: false });
  }
}

export function* logout() {
  yield put({ type: SENDING_REQUEST, isSending: true });

  let response;
  try {
    response = yield call(auth.logout);
    yield put({ type: SET_USER, data: {} });
    return response;
  } catch (error) {
    yield put({ type: REQUEST_ERROR, error: error.message });
    return false;
  } finally {
    yield put({ type: SENDING_REQUEST, isSending: false });
  }
}

export function* fetchLogin() {
  yield put({ type: SENDING_REQUEST, isSending: true });

  let response;

  try {
    response = yield call(auth.getUserData);
    yield put({ type: SET_USER, data: response.body.user });
    return response;
  } catch (error) {
    yield put({ type: LOGOUT });
    yield put({ type: REQUEST_ERROR, error: error.message });
    return false;
  } finally {
    yield put({ type: SENDING_REQUEST, isSending: false });
  }
}

export function* loginFlow() {
  while (true) {
    const request = yield take(LOGIN_REQUEST);
    const { email, password } = request.data;

    const raceWinner = yield race({
      auth: call(authorize, { email, password }),
      logout: take(LOGOUT),
    });

    if (raceWinner.auth) {
      yield put({ type: SET_AUTH, newAuthState: true });
      yield put({ type: FETCH_LOGIN });
      yield put({ type: CLEAR_ERROR });
      yield put(push('/profile'));
    }
  }
}

export function* fetchLoginFlow() {
  while (yield take(FETCH_LOGIN)) {
    yield call(fetchLogin);
  }
}


export function* logoutFlow() {
  while (yield take(LOGOUT)) {
    yield put({ type: SET_AUTH, newAuthState: false });
    yield call(logout);
    yield put({ type: CLEAR_ERROR });
    yield put(push('/'));
  }
}

export default function* root() {
  yield fork(loginFlow);
  yield fork(fetchLoginFlow);
  yield fork(logoutFlow);
}
