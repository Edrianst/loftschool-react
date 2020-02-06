import { createAction } from 'redux-actions';
import { authRequest as auth} from './types';
import { authSuccess as success} from './types';
import { logoutAction as logout} from './types';
import { authFailure as failure} from './types';
import { profileRequest as profile} from './types';
import { profileSuccess } from './types';
import { profileFailure } from './types';
import { addressRequest as address } from './types';
import { addressSuccess } from './types';
import { addressFailure } from './types';
import { routeRequest } from './types';
import { routeSuccess } from './types';
import { routeFailure } from './types';
import { cancelOrder as cancel } from './types';

// auth actions
export const fetchAuthRequest = createAction(auth);
export const fetchAuthSuccess = createAction(success);
export const fetchAuthFailure = createAction(failure);
export const logoutAction = createAction(logout);

//profile actions
export const fetchProfileRequest = createAction(profile);
export const fetchProfileSuccess = createAction(profileSuccess);
export const fetchProfileFailure = createAction(profileFailure);

//address list actions
export const fetchAddressRequest = createAction(address);
export const fetchAddressSuccess = createAction(addressSuccess);
export const fetchAddressFailure = createAction(addressFailure);

//order actions
export const fetchRouteRequest = createAction(routeRequest);
export const fetchRouteSuccess = createAction(routeSuccess);
export const fetchRouteFailure = createAction(routeFailure);
export const cancelOrder = createAction(cancel);

export default {
    fetchRouteRequest
}
