import { put, call, takeLatest } from 'redux-saga/effects';
import {GET_ALL_PULL_REQUEST} from '../Constant/dashboardConstant';
import {getAllPullSuccess, getAllPullFailure} from '../Actions/dashboardAction'
import {getAllPullAPI} from '../API/dashboardAPI'

//API call to get all the Pull Requests
function* getAllPullRequestFn(action) {
    try{
        const response =  yield call(getAllPullAPI, action.payload)
        if(response?.status === 200 && response?.data){
            yield put(getAllPullSuccess(response?.data || []))
        }else{
            yield put(getAllPullFailure())
        }
    }catch(err){
        yield put(getAllPullFailure(err))
    }
}
  
export default function* dashboardSaga() {
    yield takeLatest(GET_ALL_PULL_REQUEST, getAllPullRequestFn);
}