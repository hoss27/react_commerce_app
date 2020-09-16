import { CartActionsTypes } from "./CartTypes"


export const setToggleHidden = () => ({
    type: CartActionsTypes.TOGGLE_CART_HIDDEN
});

export const addItem = item => ({
    type: CartActionsTypes.ADD_ITEM,
    payload: item
});

export const clearItem = item => ({
    type: CartActionsTypes.CLEAR_ITEM_FROM_CART,
    payload: item
})