import {handleActions} from "redux-actions";
import {fetchAuthSuccess, logoutAction} from "./actions";

export const isLoggedIn = handleActions({
    [fetchAuthSuccess]: () => true,
    [logoutAction]: () => false
}, false);
