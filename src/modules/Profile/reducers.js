import {handleActions} from "redux-actions";
import {fetchProfileSuccess} from "./actions";

export const profile = handleActions({
    [fetchProfileSuccess]: (state, action) => action.payload
}, null);

