import {put, call} from "redux-saga/effects";
import {paymentSaga} from "./sagas";
import {setProfile} from "./api";
import {fetchProfileSuccess, fetchProfileFailure} from "./actions";

describe('payment saga', () => {
    it('should fail if action payload is incorrect', () => {
        const action = {
            cardNumber: null,
            cardName: null,
            expiryDate: null,
            cvc: null
        };

        const response = {
            success: false,
            error: 'test error'
        };

        const gen = (paymentSaga(action));

        expect(gen.next(false).value).toEqual(call(setProfile, action.payload));
        expect(gen.next(response).value).toEqual(put(fetchProfileFailure(response)));
        expect(gen.next().done).toBeTruthy();
    });

    it('should call success action if payload is correct', () => {
        const action = {
            cardNumber: '000',
            cardName: 'name',
            expiryDate: '12/22',
            cvc: '123'
        };

        const response = {
            success: true
        };

        const gen = paymentSaga(action);

        expect(gen.next(true).value).toEqual(call(setProfile, action.payload));
        expect(gen.next(response).value).toEqual(put(fetchProfileSuccess(action.payload)));
    })
});