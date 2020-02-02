import { createAction } from 'redux-actions';
import { authRequest as auth} from './types';
import { authSuccess as success} from './types';
import { logoutAction as logout} from './types';
import { authFailure as failure} from './types';
import { profileRequest as profile} from './types';
import { profileSuccess } from './types';
import { profileFailure } from './types';

export const fetchAuthRequest = createAction(auth);
export const fetchAuthSuccess = createAction(success);
export const fetchAuthFailure = createAction(failure);
export const logoutAction = createAction(logout);
export const fetchProfileRequest = createAction(profile);
export const fetchProfileSuccess = createAction(profileSuccess);
export const fetchProfileFailure = createAction(profileFailure);
