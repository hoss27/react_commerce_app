import {UserActionsTypes} from './types';


//ACTION CREATORS
export const setCurrentUser = user => ({
    type: UserActionsTypes.SET_CURRENT_USER,
    payload: user
});