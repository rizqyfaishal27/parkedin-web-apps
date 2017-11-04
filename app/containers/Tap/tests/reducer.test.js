
import { fromJS } from 'immutable';
import tapReducer from '../reducer';

describe('tapReducer', () => {
  it('returns the initial state', () => {
    expect(tapReducer(undefined, {})).toEqual(fromJS({}));
  });
});
