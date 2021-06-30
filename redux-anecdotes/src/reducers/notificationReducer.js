const notificationReducer = (state = null, action) => {
  switch (action.type) {
    case 'SET_NOTIFICATION':
      return action.notification;
    case 'CLEAR_NOTIFICATION':
      return null;

    default:
      return state;
  }
};

let timeoutId;
export const setNotification = (notification, seconds = 5) => {
  return (dispatch) => {
    clearTimeout(timeoutId);
    dispatch({ type: 'SET_NOTIFICATION', notification });
    timeoutId = setTimeout(() => {
      dispatch(clearNotification());
    }, seconds * 1000);
  };
};

export const clearNotification = () => {
  return { type: 'CLEAR_NOTIFICATION' };
};

export default notificationReducer;
