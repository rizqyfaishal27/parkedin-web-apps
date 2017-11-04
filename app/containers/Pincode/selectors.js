import { createSelector } from 'reselect';

/**
 * Direct selector to the pincode state domain
 */
const selectPincodeDomain = () => (state) => state.get('pincode');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Pincode
 */

const makeSelectPincode = () => createSelector(
  selectPincodeDomain(),
  (substate) => substate.toJS()
);

export default makeSelectPincode;
export {
  selectPincodeDomain,
};
