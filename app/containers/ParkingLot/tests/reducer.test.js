
import { fromJS } from 'immutable';
import parkingLotReducer from '../reducer';

describe('parkingLotReducer', () => {
  it('returns the initial state', () => {
    expect(parkingLotReducer(undefined, {})).toEqual(fromJS({}));
  });
});
