
import { fromJS } from 'immutable';
import parkingDetailReducer from '../reducer';

describe('parkingDetailReducer', () => {
  it('returns the initial state', () => {
    expect(parkingDetailReducer(undefined, {})).toEqual(fromJS({}));
  });
});
