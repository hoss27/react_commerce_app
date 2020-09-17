import {combineReducers} from 'redux';
import userReducers from './user/UserReducers';
import cartReducers from './cart/CartReducers';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { directoryReducers } from './directory/directoryReducer';
import { shopReducer  } from './shop/shopReducer';


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}
const rootReducers = combineReducers({
    user: userReducers,
    cart: cartReducers,
    directory: directoryReducers,
    shop: shopReducer
});


export default persistReducer(persistConfig,rootReducers);