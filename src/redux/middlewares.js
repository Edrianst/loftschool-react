import { authRequest as auth} from "./types";
import { profileRequest as profile} from "./types";
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
            .then(data => store.dispatch(fetchAuthSuccess(data)))
            .catch(error => store.dispatch(fetchAuthFailure(error)))
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
                .then(data => store.dispatch(fetchProfileSuccess(action.payload)))
                .catch(error => store.dispatch(fetchProfileFailure(error)))
    }
    return next(action);
};
