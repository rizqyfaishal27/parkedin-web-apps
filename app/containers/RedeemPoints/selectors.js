import { createSelector } from 'reselect';

/**
 * Direct selector to the redeemPoints state domain
 */
const selectRedeemPointsDomain = () => (state) => state.get('redeemPoints');

/**
 * Other specific selectors
 */


/**
 * Default selector used by RedeemPoints
 */

const makeSelectRedeemPoints = () => createSelector(
  selectRedeemPointsDomain(),
  (substate) => substate.toJS()
);

export default makeSelectRedeemPoints;
export {
  selectRedeemPointsDomain,
};
