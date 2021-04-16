import * as TYPES from '../constants/types';

const initialState = null;

export const authReducer = (state, action) => {
  state = state || initialState;

  if (action.type === TYPES.AUTH_SET) {
    return { ...action.payload };
  } else {
    return state;
  }
};

export default authReducer;
