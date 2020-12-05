import { applyMiddleware, createStore, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

import { appReducer } from './reducers';
import { dispatchLogger } from './middleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  appReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware, dispatchLogger)),
);
