
import { fromJS } from 'immutable';
import buildingInfoReducer from '../reducer';

describe('buildingInfoReducer', () => {
  it('returns the initial state', () => {
    expect(buildingInfoReducer(undefined, {})).toEqual(fromJS({}));
  });
});
