import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';

import { appReducer } from './reducers';
import { dispatchLogger } from './middleware';

export const store = createStore(appReducer, applyMiddleware(thunkMiddleware, dispatchLogger));
