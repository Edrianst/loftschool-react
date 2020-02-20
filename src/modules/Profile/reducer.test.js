import {profile} from "./reducers";

describe('profile reducer', () => {
    let action;
    const profilePayload = {
        cardNumber: '000',
        cardName: 'name',
        expiryDate: '11/22',
        cvc: '123'
    };

    it('should return default state if no action type is recognized', () => {
        expect(profile({}, {type: null})).toEqual({})
    });

    it('should update state with profile data', () => {
        const {cardNumber, cardName, expiryDate, cvc} = profilePayload;
        action = {
            type: 'SAVE_PROFILE_SUCCESS',
            payload: {
                cardNumber: cardNumber,
                cardName: cardName,
                expiryDate: expiryDate,
                cvc: cvc
            }
        };

        expect(profile({}, action)).toEqual({
            cardNumber: cardNumber,
            cardName: cardName,
            expiryDate: expiryDate,
            cvc: cvc,
            errors: null,
            pending: false,
            status: true
        })
    })
});