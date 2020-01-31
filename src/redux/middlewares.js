import { authRequest as auth} from "./constants";
import { profileRequest as profile} from "./constants";
import { fetchAuthSuccess, fetchAuthFailure, fetchProfileSuccess, fetchProfileFailure } from "./actions";

export const loginMiddleware = store => next => action => {
    if(action.type === auth) {
        fetch(`https://loft-taxi.glitch.me/${action.payload.path}`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(action.payload)})
            .then(response => response.json())
            .then(data => data.success ? store.dispatch(fetchAuthSuccess(data)) : store.dispatch(fetchAuthFailure(data.error)))
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
