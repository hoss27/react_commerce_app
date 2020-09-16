import {createSelector} from 'reselect';


export const cartSelect = state => state.cart;

export const cartHiddenSelector = createSelector(
    [cartSelect],
    cart => cart.hidden
);
export const selectCartItems = createSelector(
    [cartSelect],
    cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((iterator, cartItem) => iterator + cartItem.quantity, 0)
);