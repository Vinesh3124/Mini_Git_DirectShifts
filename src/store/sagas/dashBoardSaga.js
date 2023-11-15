import { put, call, takeLatest } from 'redux-saga/effects';
import {GET_ALL_PULL_REQUEST, GET_ALL_ISSUES_REQUEST, GET_PULL_COMMENTS_REQUEST} from '../Constant/dashboardConstant';
import {getAllPullSuccess, getAllPullFailure, getAllIssuesSuccess, getAllIssuesFailure, getPullCommentsSuccess, getPullCommentsFailure} from '../Actions/dashboardAction'
import {getAllPullAPI, getAllIssuesAPI, getPullCommentsAPI} from '../API/dashboardAPI';

//API call to get all the Pull Requests
function* getAllPullRequestFn(action) {
    try{
        const response =  yield call(getAllPullAPI, action.payload)
        if(response?.status === 200 && response?.data){
            yield put(getAllPullSuccess(response || []))
        }else{
            yield put(getAllPullFailure())
        }
    }catch(err){
        yield put(getAllPullFailure(err))
    }
}

//API call to get all the Issues Requests
function* getAllIssuesRequestFn(action) {
    try{
        const response =  yield call(getAllIssuesAPI, action.payload)
        if(response?.status === 200 && response?.data){
            yield put(getAllIssuesSuccess(response || []))
        }else{
            yield put(getAllIssuesFailure())
        }
    }catch(err){
        yield put(getAllIssuesFailure(err))
    }
}

//API call to get latest 5 Pull Requests commenst
function* getPullCommentsFn(action) {
    try{
        const response =  yield call(getPullCommentsAPI, action.payload)
        if(response?.status === 200 && response?.data){
            yield put(getPullCommentsSuccess(response?.data || []))
        }else{
            yield put(getPullCommentsFailure())
        }
    }catch(err){
        yield put(getPullCommentsFailure(err))
    }
}
  
export default function* dashboardSaga() {
    yield takeLatest(GET_ALL_PULL_REQUEST, getAllPullRequestFn);
    yield takeLatest(GET_ALL_ISSUES_REQUEST, getAllIssuesRequestFn);
    yield takeLatest(GET_PULL_COMMENTS_REQUEST, getPullCommentsFn)
}