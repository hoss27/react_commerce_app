import {createSelector} from 'reselect';
import CartItem from '../../components/cart-item/cart-item';


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


export const selectCartItemCountTotal = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((iterator, cartItem) => iterator+(cartItem.quantity * cartItem.price), 0)
)