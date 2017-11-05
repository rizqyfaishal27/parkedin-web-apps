import { fromJS } from 'immutable';
import { isEmpty } from 'lodash';
import {
  SET_AUTH,
  SET_USER,
  SET_USER_DATA,
  REQUEST_ERROR,
  CLEAR_ERROR,
  SENDING_REQUEST,
} from 'global-constants';

import auth from './auth';


const initialState = fromJS({
  user: fromJS({ }),
  isLoggedIn: auth.isLoggedIn(),
  isSending: false,
  error: '',
  userLoaded: false,
});

const globalReducers = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH:
      return state.set('isLoggedIn', action.newAuthState);
    case SET_USER:
      return state.set('user', action.data).set('userLoaded', !isEmpty(action.data));
    case SET_USER_DATA: {
      let user = state.toJS().user;
      user = action.data;
      return state.set('user', fromJS(user)).set('userLoaded', !isEmpty(action.data));
    }
    case REQUEST_ERROR:
      return state.set('error', action.error);
    case CLEAR_ERROR:
      return state.set('error', '');
    case SENDING_REQUEST:
      return state.set('isSending', action.isSending);
    default:
      return state;
  }
};

export default globalReducers;
