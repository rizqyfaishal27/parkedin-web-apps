/*
 *
 * Login reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  IS_LOADING
} from './constants';

const initialState = fromJS({
	isLoading: false,
});

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
     case IS_LOADING:
     	return state.set('isLoading', action.isLoading);
    default:
      return state;
  }
}

export default loginReducer;
