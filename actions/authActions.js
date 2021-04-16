import * as TYPES from '../constants/types';

const setAuth = (tokens) => (dispatch) => {
  dispatch({
    type: TYPES.AUTH_SET,
    payload: tokens
  });
};

export default setAuth;
