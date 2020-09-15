import {combineReducers} from 'redux';
import userReducers from './user/UserReducers';
import cartReducers from './cart/CartReducers';

export default combineReducers({
    user: userReducers,
    cart: cartReducers
});