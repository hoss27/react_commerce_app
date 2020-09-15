import {combineReducers} from 'redux';
import userReducers from './user/UserReducers';


export default combineReducers({
    user: userReducers
});