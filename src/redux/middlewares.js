import { loginRequest as login} from "./constants";
import { registerRequest as register} from "./constants";
import { profileRequest as profile} from "./constants";
import { fetchLoginSuccess, fetchLoginFailure, fetchProfileSuccess, fetchProfileFailure } from "./actions";

export const loginMiddleware = store => next => action => {
    if(action.type === login) {
        fetch('https://loft-taxi.glitch.me/auth', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(action.payload)})
            .then(response => response.json())
            .then(data => data.success ? store.dispatch(fetchLoginSuccess(data)) : store.dispatch(fetchLoginFailure(data.error)))
    }
    return next(action);
};

export const registerMiddleware = store => next => action => {
    if(action.type === register) {
        fetch('https://loft-taxi.glitch.me/register', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(action.payload)})
            .then(response => response.json())
            .then(data => data.success ? store.dispatch(fetchLoginSuccess(data)) : store.dispatch(fetchLoginFailure(data.error)))
    }
    return next(action);
};

export const profileMiddleware = store => next => action => {
    if(action.type === profile) {
        fetch('https://loft-taxi.glitch.me/card', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(action.payload)})
                .then(response => response.json())
                .then(data => data.success ? store.dispatch(fetchProfileSuccess(action.payload)) : store.dispatch(fetchProfileFailure(data.error)))
    }
    return next(action);
};
