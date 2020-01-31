import { createAction } from 'redux-actions';
import { loginRequest as login} from './constants';
import { registerRequest as register} from './constants';
import { loginSuccess as success} from './constants';
import { logoutAction as logout} from './constants';
import { loginFailure as failure} from './constants';
import { profileRequest as profile} from './constants';
import { profileSuccess } from './constants';
import { profileFailure } from './constants';

export const fetchLoginRequest = createAction(login);
export const fetchRegisterRequest = createAction(register);
export const fetchLoginSuccess = createAction(success);
export const logoutAction = createAction(logout);
export const fetchLoginFailure = createAction(failure);
export const fetchProfileRequest = createAction(profile);
export const fetchProfileSuccess = createAction(profileSuccess);
export const fetchProfileFailure = createAction(profileFailure);
