import {isLoggedIn} from '../reducers';

describe('isLoggedIn reducer', () => {
    let action;

    it('should return default state, if no action type is recognized',() => {
        expect(isLoggedIn({}, { type: null })).toEqual({});
    });

    it('should set state to true', () => {
        action = {
            type: 'AUTH_SUCCESS'
        };
        expect(isLoggedIn({}, action)).toEqual(true)
    });

    it('should set state to false', () => {
        action = {
            type: 'LOGOUT_ACTION'
        };
        expect(isLoggedIn({}, action)).toEqual(false)
    });
});