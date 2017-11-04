
import { fromJS } from 'immutable';
import recommendationReducer from '../reducer';

describe('recommendationReducer', () => {
  it('returns the initial state', () => {
    expect(recommendationReducer(undefined, {})).toEqual(fromJS({}));
  });
});
