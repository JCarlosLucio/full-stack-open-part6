import deepFreeze from 'deep-freeze';
import notificationReducer, { notificationChange } from './notificationReducer';

describe('notificationReducer', () => {
  const initialState = 'initial notification';

  test('should set notification', () => {
    const action = {
      type: 'SET_NOTIFICATION',
      notification: 'A notification that was set',
    };
    const state = initialState;
    deepFreeze(state);
    const newState = notificationReducer(state, action);
    expect(newState).toEqual(action.notification);
  });

  test('should set notification with notificationChange', () => {
    const action = notificationChange('notification with action creator');
    const state = initialState;
    deepFreeze(state);
    const newState = notificationReducer(state, action);
    expect(action.type).toBe('SET_NOTIFICATION');
    expect(action.notification).toBe('notification with action creator');
    expect(newState).toEqual(action.notification);
  });
});
