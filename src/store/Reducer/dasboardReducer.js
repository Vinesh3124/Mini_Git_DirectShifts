import {GET_ALL_PULL_REQUEST, GET_ALL_PULL_SUCCESS, GET_ALL_PULL_FAILURE} from '../Constant/dashboardConstant'

const initialState = {
    isLoading: false,
    hasError: false,
    errMsg: '',
    allPullRequest: []
}

const dashboardReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_ALL_PULL_REQUEST:
            return{
                ...state,
                isLoading: true,
                hasError: false,
                errMsg: '',
            }
        case GET_ALL_PULL_SUCCESS:
            return{
                ...state,
                isLoading: false,
                allPullRequest: action.payload
            }
        case GET_ALL_PULL_FAILURE:
            return{
                ...state,
                isLoading: true,
                hasError: true,
                errMsg: 'Something went wrong',
            }
        default:
        return state;
    }
}

export default dashboardReducer