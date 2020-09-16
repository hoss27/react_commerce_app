import { CartActionsTypes } from "./CartTypes.js";
import {addItemToCart} from './CartUtils';

const initialState = {
  hidden: true,
  cartItems: [],
};

const cartReducers = (state = initialState, action) => {
  switch (action.type) {
    case CartActionsTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case CartActionsTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      };
    default:
      return state;
  }
};

export default cartReducers;
