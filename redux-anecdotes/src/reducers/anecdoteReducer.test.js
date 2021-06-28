import deepFreeze from 'deep-freeze';
import anecdoteReducer from './anecdoteReducer';

describe('anecdoteReducer', () => {
  const initialState = [
    { content: 'anecdote', id: 1, votes: 0 },
    { content: 'anecdote to vote', id: 2, votes: 0 },
  ];

  test('should return proper initial state when called with unknown action', () => {
    const action = {
      type: 'UNKNOWN',
      data: {
        id: 2,
      },
    };
    const state = initialState;
    deepFreeze(state);

    const newState = anecdoteReducer(state, action);
    expect(newState).toEqual(initialState);
  });

  test('should increment vote count of anecdote', () => {
    const action = {
      type: 'VOTE',
      data: {
        id: 2,
      },
    };
    const state = initialState;
    deepFreeze(state);

    const newState = anecdoteReducer(state, action);
    expect(newState).toEqual([
      { content: 'anecdote', id: 1, votes: 0 },
      { content: 'anecdote to vote', id: 2, votes: 1 },
    ]);
  });

  test('should add a new anecdote', () => {
    const action = {
      type: 'NEW_ANECDOTE',
      data: {
        content: 'a new anecdote',
        id: 3,
        votes: 0,
      },
    };
    const state = initialState;
    deepFreeze(state);

    const newState = anecdoteReducer(state, action);
    expect(newState).toHaveLength(3);
    expect(newState).toContainEqual(action.data);
  });

  test('should initialize all anecdotes to state', () => {
    const action = {
      type: 'INIT_ANECDOTES',
      data: initialState,
    };
    const state = [];
    deepFreeze(state);
    const newState = anecdoteReducer(state, action);
    expect(newState).toEqual(action.data);
  });
});
