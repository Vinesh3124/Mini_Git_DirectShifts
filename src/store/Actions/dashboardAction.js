import {GET_ALL_PULL_REQUEST, GET_ALL_PULL_SUCCESS, GET_ALL_PULL_FAILURE, GET_ALL_ISSUES_REQUEST, GET_ALL_ISSUES_SUCCESS, GET_ALL_ISSUES_FAILURE, GET_PULL_COMMENTS_REQUEST, GET_PULL_COMMENTS_SUCCESS, GET_PULL_COMMENTS_FAILURE} from '../Constant/dashboardConstant'

export const getAllPullRequest = (payload) => ({ type: GET_ALL_PULL_REQUEST, payload });
export const getAllPullSuccess = (payload) => ({ type: GET_ALL_PULL_SUCCESS, payload });
export const getAllPullFailure = () => ({ type: GET_ALL_PULL_FAILURE });

export const getAllIssuesRequest = (payload) => ({ type: GET_ALL_ISSUES_REQUEST, payload });
export const getAllIssuesSuccess = (payload) => ({ type: GET_ALL_ISSUES_SUCCESS, payload });
export const getAllIssuesFailure = () => ({ type: GET_ALL_ISSUES_FAILURE });

export const getPullCommentsRequest = (payload) => ({ type: GET_PULL_COMMENTS_REQUEST, payload });
export const getPullCommentsSuccess = (payload) => ({ type: GET_PULL_COMMENTS_SUCCESS, payload });
export const getPullCommentsFailure = () => ({ type: GET_PULL_COMMENTS_FAILURE });