import * as actions from '../actions';
// import * as request from 'request-promise';
//import fetch from 'isomorphic-fetch'


import {take, put, call, fork, select} from 'redux-saga/effects'

import { lineNumberSelector, stopPointIdSelector } from '../reducers/selectors'


export function fetchListStopPointApi(lineNumber) {
    var url = 'https://api.tfl.gov.uk/line/' + lineNumber + '/route/sequence/outbound';
    return fetch(url)
        .then(response => response.json())
        .then((rs)=> {
            // todo: parse rs
            return rs;
        });
}

export function* fetchListStopPoint(lineNumber) {
    yield put(actions.requestSearch(lineNumber));
    const listResult = yield call(fetchListStopPointApi, lineNumber);
    yield put(actions.receivedSearch(lineNumber, listResult));
}


export function fetchSelectStopPointApi(stopPointId) {
    var url = 'https://api.tfl.gov.uk/StopPoint/' + stopPointId + '/arrivals';
    return fetch(url)
        .then(response => response.json())
        .then((rs)=> {
            // todo: parse rs
            return rs;
        });
}

export function* fetchSelectStopPoint(stopPointId) {
    yield put(actions.requestSelectStopPoint(stopPointId));
    const listResult = yield call(fetchSelectStopPointApi, stopPointId);
    yield put(actions.receivedSelectStopPoint(stopPointId, listResult));
}



export function* startupGetList() {
    while (true) {
        const {lineNumber} = yield take(actions.REQUEST_SEARCH)
        yield call( fetchListStopPoint, lineNumber )
    }
}

export function* startupGetStopPoint() {
    while (true) {
        const {stopPointId} = yield take(actions.REQUEST_SELECT_STOP_POINT)
        yield call( fetchSelectStopPoint, stopPointId )
    }
}


export default function* rootSaga() {
    yield fork(startupGetList)
    yield fork(startupGetStopPoint)
}