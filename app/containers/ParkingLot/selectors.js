import { createSelector } from 'reselect';

/**
 * Direct selector to the parkingLot state domain
 */
const selectParkingLotDomain = () => (state) => state.get('parkingLot');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ParkingLot
 */

const makeSelectParkingLot = () => createSelector(
  selectParkingLotDomain(),
  (substate) => substate.toJS()
);

export default makeSelectParkingLot;
export {
  selectParkingLotDomain,
};
