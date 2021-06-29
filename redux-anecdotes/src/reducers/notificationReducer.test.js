import deepFreeze from 'deep-freeze';
import notificationReducer, { clearNotification } from './notificationReducer';

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

  test('should clear notification', () => {
    const action = { type: 'CLEAR_NOTIFICATION' };
    const state = initialState;
    deepFreeze(state);
    const newState = notificationReducer(state, action);
    expect(newState).toEqual(null);
  });

  test('should clear notification with clearNotification', () => {
    const action = clearNotification();
    const state = initialState;
    deepFreeze(state);
    const newState = notificationReducer(state, action);
    expect(action.type).toBe('CLEAR_NOTIFICATION');
    expect(newState).toEqual(null);
  });
});
