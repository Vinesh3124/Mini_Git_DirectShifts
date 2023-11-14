// src/store/sagas/index.js

import { all } from 'redux-saga/effects';
import dashboardSaga from './dashBoardSaga'
// import mySaga from './mySaga'; // Create this file in the next step

function* rootSaga() {
  yield all([
    dashboardSaga()
    // Add other sagas here
  ]);
}

export default rootSaga;
