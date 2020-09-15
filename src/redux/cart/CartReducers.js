import { CartActionsTypes } from './CartTypes.js';

const initialState = {
    hidden: true
};


const cartReducers = (state = initialState, action) => {
    switch(action.type){
        case CartActionsTypes.TOGGLE_CART_HIDDEN :
            return {
                ...state,
                hidden: !state.hidden
            }
        default:
            return state
    }
}


export default cartReducers;