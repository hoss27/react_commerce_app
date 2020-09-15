import {SET_CURRENT_USER} from './types';


//ACTION CREATORS
export const setCurrentUser = user => ({
    type: SET_CURRENT_USER,
    payload: user
});