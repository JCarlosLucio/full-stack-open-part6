import deepFreeze from 'deep-freeze';
import filterReducer, { filterChange } from './filterReducer';

describe('filterReducer', () => {
  const initialState = 'initial filter';
  test('should return set filter', () => {
    const action = {
      type: 'SET_FILTER',
      filter: 'some filter',
    };
    const state = initialState;
    deepFreeze(state);
    const newState = filterReducer(state, action);
    expect(newState).toEqual(action.filter);
  });

  test('should return set filter with filterChange', () => {
    const action = filterChange('from filterChange');
    const state = initialState;
    deepFreeze(state);
    const newState = filterReducer(state, action);
    expect(action.type).toBe('SET_FILTER');
    expect(action.filter).toBe('from filterChange');
    expect(newState).toEqual(action.filter);
  });
});
