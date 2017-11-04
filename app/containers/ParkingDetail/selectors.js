import { createSelector } from 'reselect';

/**
 * Direct selector to the parkingDetail state domain
 */
const selectParkingDetailDomain = () => (state) => state.get('parkingDetail');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ParkingDetail
 */

const makeSelectParkingDetail = () => createSelector(
  selectParkingDetailDomain(),
  (substate) => substate.toJS()
);

export default makeSelectParkingDetail;
export {
  selectParkingDetailDomain,
};
