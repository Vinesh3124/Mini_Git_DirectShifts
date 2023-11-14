import {GET_ALL_PULL_REQUEST, GET_ALL_PULL_SUCCESS, GET_ALL_PULL_FAILURE, GET_ALL_ISSUES_REQUEST, GET_ALL_ISSUES_SUCCESS, GET_ALL_ISSUES_FAILURE} from '../Constant/dashboardConstant'

export const getAllPullRequest = (payload) => ({ type: GET_ALL_PULL_REQUEST, payload });
export const getAllPullSuccess = (payload) => ({ type: GET_ALL_PULL_SUCCESS, payload });
export const getAllPullFailure = () => ({ type: GET_ALL_PULL_FAILURE });

export const getAllIssuesRequest = (payload) => ({ type: GET_ALL_ISSUES_REQUEST, payload });
export const getAllIssuesSuccess = (payload) => ({ type: GET_ALL_ISSUES_SUCCESS, payload });
export const getAllIssuesFailure = () => ({ type: GET_ALL_ISSUES_FAILURE });