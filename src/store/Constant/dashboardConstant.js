export const GET_ALL_PULL_REQUEST = 'GET_ALL_PULL_REQUEST';
export const GET_ALL_PULL_SUCCESS = 'GET_ALL_PULL_SUCCESS';
export const GET_ALL_PULL_FAILURE = 'GET_ALL_PULL_FAILURE';

export const GET_ALL_ISSUES_REQUEST = 'GET_ALL_ISSUES_REQUEST';
export const GET_ALL_ISSUES_SUCCESS = 'GET_ALL_ISSUES_SUCCESS';
export const GET_ALL_ISSUES_FAILURE = 'GET_ALL_ISSUES_FAILURE';

export const GET_PULL_COMMENTS_REQUEST = 'GET_PULL_COMMENTS_REQUEST';
export const GET_PULL_COMMENTS_SUCCESS = 'GET_PULL_COMMENTS_SUCCESS';
export const GET_PULL_COMMENTS_FAILURE = 'GET_PULL_COMMENTS_FAILURE';

export const SET_SELECTED_REPO_REQUEST = 'SET_SELECTED_REPO_REQUEST';
export const SET_SELECTED_REPO_SUCCESS = 'SET_SELECTED_REPO_SUCCESS';

export const RepoList = [{label: 'Shine Clone', value: 'Shine-masai'}, {label: 'Pepperfry Clone', value: 'pepperfry_clone'}]

export const mapOwnerObj = {
    'Shine-masai': 'Shubhamsharma585',
    'pepperfry_clone': 'Vinesh3124'
}

export const pullStateFilter = [{ label: 'All', value: 'all' }, { label: 'Closed', value: 'closed' }, { label: 'Open', value: 'open' }];
export const pullSortFilter = [{ label: 'Updated', value: 'updated' }, { label: 'Created', value: 'created' }, { label: 'Popularity', value: 'popularity' }, { label: 'Long Running', value: 'long-running' }];
export const issuesLabelFilter = [{ label: 'Bug', value: 'bug' }, { label: 'Documentation', value: 'documentation' }, { label: 'Duplicate', value: 'duplicate' }, { label: 'Enhancement', value: 'enhancement' }, { label: 'Help Wanted', value: 'help wanted' }, { label: 'Invalid', value: 'invalid' }, { label: 'Question', value: 'question' }, { label: 'wontfix', value: 'Will not fix' }]

export const FormatTimeDateFn = (timestamp) => {
    if(timestamp){
        const date = new Date(timestamp);

        const dateFormat = new Intl.DateTimeFormat('en-GB', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            timeZone: 'UTC'
        });
    
        const formattedDate = dateFormat.format(date);
    
        return formattedDate;
    }

    return ''
}