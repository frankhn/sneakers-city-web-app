/* eslint-disable import/no-extraneous-dependencies */
import {
  createStore, applyMiddleware, Middleware,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createWrapper, MakeStore } from 'next-redux-wrapper';

// #region Local Imports
import rootReducer from './reducers';
import rootSaga from './sagas';

const bindMiddleware = (middleware: Middleware[]) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};


export type AppState = ReturnType<typeof rootReducer>;

export const makeStore: MakeStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(rootReducer, bindMiddleware([sagaMiddleware]));

  (store as any).sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};

export default createWrapper(makeStore, { debug: true });
