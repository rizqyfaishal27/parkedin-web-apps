import { createSelector } from 'reselect';

/**
 * Direct selector to the buildingMap state domain
 */
const selectBuildingMapDomain = () => (state) => state.get('buildingMap');

/**
 * Other specific selectors
 */


/**
 * Default selector used by BuildingMap
 */

const makeSelectBuildingMap = () => createSelector(
  selectBuildingMapDomain(),
  (substate) => substate.toJS()
);

export default makeSelectBuildingMap;
export {
  selectBuildingMapDomain,
};
