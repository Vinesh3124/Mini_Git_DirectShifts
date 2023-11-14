// src/store/reducers/index.js

import { combineReducers } from 'redux';
import dashboardReducer from './dasboardReducer';

const rootReducer = combineReducers({
    dashboardReducer: dashboardReducer,
});

export default rootReducer;
