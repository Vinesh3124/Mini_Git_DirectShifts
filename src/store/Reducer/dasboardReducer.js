import {
    GET_ALL_PULL_REQUEST,
    GET_ALL_PULL_SUCCESS,
    GET_ALL_PULL_FAILURE,
    GET_ALL_ISSUES_REQUEST,
    GET_ALL_ISSUES_SUCCESS,
    GET_ALL_ISSUES_FAILURE,
    GET_PULL_COMMENTS_REQUEST, 
    GET_PULL_COMMENTS_SUCCESS, 
    GET_PULL_COMMENTS_FAILURE,
    SET_SELECTED_REPO_REQUEST, 
    SET_SELECTED_REPO_SUCCESS
} from "../Constant/dashboardConstant";

const initialState = {
    isLoading: false,
    hasError: false,
    errMsg: "",
    allPullRequest: [],
    allIssuesRequest: [],
    maxPullPage: 0,
    maxIssuesPage: 0,
    pullComments: [],
    repoName: ''
};

const getLastPageNum = (paginationHeader, lastPage) => {

    const links = paginationHeader.split(',');

    // Find the link with rel="last"
    const lastPageLink = links.find(link => link.includes('rel="last"'));

    if (lastPageLink) {
        // Extract the URL from the link
        const lastPageUrlMatch = lastPageLink.match(/<([^>]+)>/);

        if (lastPageUrlMatch && lastPageUrlMatch[1]) {
            // Extract the page number from the URL
            const lastPageMatch = lastPageUrlMatch[1].match(/&page=(\d+)/);

            if (lastPageMatch && lastPageMatch[1]) {
                return parseInt(lastPageMatch[1], 10)
            }
        }
    } 
    return lastPage
}

const dashboardReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SELECTED_REPO_REQUEST: 
            return{
                ...state,
                repoName: ''
            }
        case SET_SELECTED_REPO_SUCCESS:
            return{
                ...state,
                repoName: action.payload
            }
        case GET_ALL_PULL_REQUEST:
            return {
                ...state,
                isLoading: true,
                hasError: false,
                errMsg: "",
                allPullRequest: []
            };
        case GET_ALL_PULL_SUCCESS:
            return {
                ...state,
                isLoading: false,
                allPullRequest: action.payload.data || [],
                maxPullPage: getLastPageNum(action?.payload?.headers?.link || '', state.maxPullPage) || 0
            };
        case GET_ALL_PULL_FAILURE:
            return {
                ...state,
                isLoading: true,
                hasError: true,
                errMsg: "Something went wrong",
            };
        case GET_ALL_ISSUES_REQUEST:
            return {
                ...state,
                isLoading: true,
                hasError: false,
                errMsg: "",
                allIssuesRequest: []
            };
        case GET_ALL_ISSUES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                allIssuesRequest: action.payload.data,
                maxIssuesPage: getLastPageNum(action?.payload?.headers?.link || '', state.maxIssuesPage) || 0
            };
        case GET_ALL_ISSUES_FAILURE:
            return {
                ...state,
                isLoading: true,
                hasError: true,
                errMsg: "Something went wrong",
            };
            case GET_PULL_COMMENTS_REQUEST:
                return {
                    ...state,
                    isLoading: true,
                    hasError: false,
                    errMsg: "",
                    pullComments: []
                };
            case GET_PULL_COMMENTS_SUCCESS:
                return {
                    ...state,
                    isLoading: false,
                    pullComments: action.payload.slice(0, 5),
                };
            case GET_PULL_COMMENTS_FAILURE:
                return {
                    ...state,
                    isLoading: true,
                    hasError: true,
                    errMsg: "Something went wrong",
                };
        default:
            return state;
    }
};

export default dashboardReducer;
