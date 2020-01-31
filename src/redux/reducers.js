import { loginRequest as login} from "./constants";
import { loginSuccess as success} from "./constants";
import { loginFailure as failure} from "./constants";
import { registerRequest as register} from "./constants";
import { logoutAction as logout} from "./constants";
import { profileRequest as profile} from "./constants";
import { profileSuccess } from "./constants";
import { profileFailure } from "./constants";

//const initialState = {
//    pending: false,
//    isLoggedIn: false,
//    error: null,
//    profile: {
//        token: ''
//    }
//};

export default (state = {}, action) => {
    switch (action.type) {
        case login:
            return {
                ...state,
                pending: true
            };
        case register:
            return {
                ...state,
                pending: true
            };
        case success:
            return {
                ...state,
                isLoggedIn: true,
                pending: false,
            };
        case logout:
            return {
                ...state,
                isLoggedIn: false
            };
        case failure:
            return {
                ...state,
                pending: false,
                error: action.payload
            };
        case profile:
            return {
                ...state,
                pending: true
            };
        case profileSuccess:
            return {
                ...state,
                pending: false,
                profile: action.payload
            };
        case profileFailure:
            return {
                ...state,
                pending: false,
                error: action.payload
            };
        default:
            return state;

    }
};
