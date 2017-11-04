import { createSelector } from 'reselect';

/**
 * Direct selector to the tap state domain
 */
const selectTapDomain = () => (state) => state.get('tap');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Tap
 */

const makeSelectTap = () => createSelector(
  selectTapDomain(),
  (substate) => substate.toJS()
);

export default makeSelectTap;
export {
  selectTapDomain,
};
