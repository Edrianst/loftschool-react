import {auth} from '../reducers';

describe('auth reducer', () => {
    let action;

    it('should return default state, if no action type is recognized',() => {
        expect(auth({}, { type: null })).toEqual({});
    });

    it('should set state to true', () => {
        action = {
            type: 'AUTH_SUCCESS'
        };
        expect(auth({}, action)).toEqual({isLoggedIn: true, errors: null, pending: false})
    });

    it('should set state to false', () => {
        action = {
            type: 'LOGOUT_ACTION'
        };
        expect(auth({}, action)).toEqual({isLoggedIn: false, errors: null, pending: false})
    });
});