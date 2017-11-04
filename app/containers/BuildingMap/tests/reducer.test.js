
import { fromJS } from 'immutable';
import buildingMapReducer from '../reducer';

describe('buildingMapReducer', () => {
  it('returns the initial state', () => {
    expect(buildingMapReducer(undefined, {})).toEqual(fromJS({}));
  });
});
