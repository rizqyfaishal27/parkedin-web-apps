
import { fromJS } from 'immutable';
import redeemPointsReducer from '../reducer';

describe('redeemPointsReducer', () => {
  it('returns the initial state', () => {
    expect(redeemPointsReducer(undefined, {})).toEqual(fromJS({}));
  });
});
