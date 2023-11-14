// src/store/index.js

import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './Reducer/index';
import rootSaga from './sagas'; // Create this file in the next step

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// Create the Redux store by combining reducers and applying middleware
const store = createStore(
  rootReducer, // Combine your reducers here
  applyMiddleware(sagaMiddleware) // Apply middleware (redux-saga)
);

// Run the root saga to handle side effects
sagaMiddleware.run(rootSaga);

export default store;
