
import { fromJS } from 'immutable';
import parkingHistoryReducer from '../reducer';

describe('parkingHistoryReducer', () => {
  it('returns the initial state', () => {
    expect(parkingHistoryReducer(undefined, {})).toEqual(fromJS({}));
  });
});
