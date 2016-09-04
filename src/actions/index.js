export const REQUEST_SEARCH= 'REQUEST_SEARCH';
export const RECEIVED_SEARCH = 'RECEIVED_SEARCH';

export const REQUEST_SELECT_STOP_POINT = 'REQUEST_SELECT_STOP_POINT';
export const RECEIVED_SELECT_STOP_POINT = 'RECEIVED_SELECT_STOP_POINT';

export function requestSearch(lineNumber) {
    return {
        type: REQUEST_SEARCH,
        lineNumber
    }
}

export function receivedSearch(lineNumber, listResult) {
    return {
        type: RECEIVED_SEARCH,
        lineNumber,
        listResult
    }
}


export function requestSelectStopPoint(stopPointId) {
    return {
        type: REQUEST_SELECT_STOP_POINT,
        stopPointId
    }
}

export function receivedSelectStopPoint(stopPointId, stopPointObj) {
    return {
        type: RECEIVED_SELECT_STOP_POINT,
        stopPointId,
        stopPointObj
    }
}


