
import { fromJS } from 'immutable';
import pincodeReducer from '../reducer';

describe('pincodeReducer', () => {
  it('returns the initial state', () => {
    expect(pincodeReducer(undefined, {})).toEqual(fromJS({}));
  });
});
