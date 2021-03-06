/*
 *
 * Login actions
 *
 */

import {
  DEFAULT_ACTION,
  IS_LOADING
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function isLoading(isLoading) {
	return {
		type: IS_LOADING,
		isLoading
	}
}