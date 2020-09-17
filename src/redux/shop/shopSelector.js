import {createSelector} from 'reselect';


export const selectShop = state => state.shop;


export const selectC = createSelector(
    [selectShop],
    shop => shop.collections
)