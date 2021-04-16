import * as TYPES from '../constants/types';

const initialState = null;

export const authReducer = (state, action) => {
  state = state || initialState;

  if (action.type === TYPES.AUTH_SET) {
    localStorage.setItem('auth', JSON.stringify(action.payload));
    return { ...action.payload };
  } else {
    return state;
  }
};

export default authReducer;
