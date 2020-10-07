import { takeEvery, fork, put, all, call } from 'redux-saga/effects';

import {
    GET_A_SNEAKER,
    GET_SNEAKERS,
} from './types';
import {
    getASneakerApiError,
    getASneakerSuccess,
    getSneakerApiError,
    getSneakersSuccess
} from './action';
import { getRequest } from '@Redux/api';


function* getSneakers({ type: GET_SNEAKERS, payload: { page } }: any) {
    try {
        const response = yield call(getRequest, `/sneakers?page=${page}`);
        yield put(getSneakersSuccess(response.data, response.meta));
    } catch (error) {
        yield put(getSneakerApiError(error.response));
    }
}

export function* watchSneakers() {
    yield takeEvery(GET_SNEAKERS, getSneakers);
}

function* getASneaker({ type: GET_A_SNEAKER, payload: { id } }: any) {
    try {
        const response = yield call(getRequest, `/sneakers/${id}`);
        yield put(getASneakerSuccess(response.data));
    } catch (error) {
        yield put(getASneakerApiError(error.response));
    }
}

export function* watchASneaker() {
    yield takeEvery(GET_A_SNEAKER, getASneaker);
}



function* sneakersSaga() {
    yield all([
        fork(watchSneakers),
        fork(watchASneaker)
    ]);
}

export default sneakersSaga;
