import {combineReducers} from 'redux'
import {
    REQUEST_SEARCH,
    RECEIVED_SEARCH,
    REQUEST_SELECT_STOP_POINT,
    RECEIVED_SELECT_STOP_POINT
} from '../actions'


function search(state = {
    isFetching: false,
    items: {}
}, action) {

    switch (action.type) {
        case REQUEST_SEARCH:
            return {
                ...state,
                isFetching: true
            };
        case RECEIVED_SEARCH:
            return {
                ...state,
                isFetching: false,
                items: action.listResult
            };
        default:
            return state
    }
}


function selectStopPoint(state = {
    isFetching: false,
    data: {}
}, action) {
    switch (action.type) {
        case REQUEST_SELECT_STOP_POINT:
            return {
                ...state,
                isFetching: true
            };
        case RECEIVED_SELECT_STOP_POINT:
            return {
                ...state,
                isFetching: false,
                data: action.stopPointObj
            };
        default:
            return state
    }
}

const rootReducer = combineReducers({
    search,
    selectStopPoint
});

export default rootReducer