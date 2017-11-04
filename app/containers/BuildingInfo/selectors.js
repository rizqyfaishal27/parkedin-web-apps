import { createSelector } from 'reselect';

/**
 * Direct selector to the buildingInfo state domain
 */
const selectBuildingInfoDomain = () => (state) => state.get('buildingInfo');

/**
 * Other specific selectors
 */


/**
 * Default selector used by BuildingInfo
 */

const makeSelectBuildingInfo = () => createSelector(
  selectBuildingInfoDomain(),
  (substate) => substate.toJS()
);

export default makeSelectBuildingInfo;
export {
  selectBuildingInfoDomain,
};
