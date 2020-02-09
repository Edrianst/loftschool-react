import { call, put, takeLatest, fork } from "redux-saga/effects";
import { fetchProfileFailure, fetchProfileRequest, fetchProfileSuccess } from "./actions";
import { setProfile } from "./api";

function* fetchProfileWatcher() {
    yield takeLatest(fetchProfileRequest, paymentSaga);
}

function* paymentSaga(action) {
    try {
        const response = yield call(setProfile, action.payload);
        response.success ? yield put(fetchProfileSuccess(action.payload)) : yield put(fetchProfileFailure(response));
    } catch (err) {
        yield put(fetchProfileFailure(err))
    }
}

export default function* (){
    yield fork(fetchProfileWatcher)
}