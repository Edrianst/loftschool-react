import { createAction } from 'redux-actions';
import { authRequest as auth} from './constants';
import { authSuccess as success} from './constants';
import { logoutAction as logout} from './constants';
import { authFailure as failure} from './constants';
import { profileRequest as profile} from './constants';
import { profileSuccess } from './constants';
import { profileFailure } from './constants';

export const fetchAuthRequest = createAction(auth);
export const fetchAuthSuccess = createAction(success);
export const fetchAuthFailure = createAction(failure);
export const logoutAction = createAction(logout);
export const fetchProfileRequest = createAction(profile);
export const fetchProfileSuccess = createAction(profileSuccess);
export const fetchProfileFailure = createAction(profileFailure);
