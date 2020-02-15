import {addressListSaga} from "../sagas";
import {call, put} from 'redux-saga/effects';
import {addressRequest} from "../api";
import {fetchAddressSuccess} from "../actions";

describe('addressListSaga', () => {

    it('should get addresses list', () => {
        const gen = addressListSaga();
        const response = {
            addresses: ['some address', 'some other address']
        };

        expect(gen.next().value).toEqual(call(addressRequest));
        expect(gen.next(response).value).toEqual(put(fetchAddressSuccess(response.addresses)));
    });
});