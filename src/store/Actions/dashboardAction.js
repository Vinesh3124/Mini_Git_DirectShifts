import {GET_ALL_PULL_REQUEST, GET_ALL_PULL_SUCCESS, GET_ALL_PULL_FAILURE} from '../Constant/dashboardConstant'

export const getAllPullRequest = (payload) => ({ type: GET_ALL_PULL_REQUEST, payload });
export const getAllPullSuccess = (payload) => ({ type: GET_ALL_PULL_SUCCESS, payload });
export const getAllPullFailure = () => ({ type: GET_ALL_PULL_FAILURE });