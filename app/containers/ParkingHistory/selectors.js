import { createSelector } from 'reselect';

/**
 * Direct selector to the parkingHistory state domain
 */
const selectParkingHistoryDomain = () => (state) => state.get('parkingHistory');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ParkingHistory
 */

const makeSelectParkingHistory = () => createSelector(
  selectParkingHistoryDomain(),
  (substate) => substate.toJS()
);

export default makeSelectParkingHistory;
export {
  selectParkingHistoryDomain,
};
