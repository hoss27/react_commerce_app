import {createSelector} from 'reselect';



export const userSelect = state => state.user;


export const currentUserSelect = createSelector(
    [userSelect],
    user => user.currentUser
);