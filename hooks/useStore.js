import { applyMiddleware, compose, createStore } from 'redux';
import rootReducer from '../reducers/rootReducer';
import promiseMiddleware from '../services/promiseMiddleware';

const initialState = {};

const useStore = () => {
  const middleware = [promiseMiddleware];
  const enhancers = [];

  const composer = compose(applyMiddleware(...middleware), ...enhancers);

  return createStore(rootReducer, initialState, composer);
};

export default useStore;
