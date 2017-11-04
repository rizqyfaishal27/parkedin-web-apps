import { createSelector } from 'reselect';

/**
 * Direct selector to the recommendation state domain
 */
const selectRecommendationDomain = () => (state) => state.get('recommendation');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Recommendation
 */

const makeSelectRecommendation = () => createSelector(
  selectRecommendationDomain(),
  (substate) => substate.toJS()
);

export default makeSelectRecommendation;
export {
  selectRecommendationDomain,
};
