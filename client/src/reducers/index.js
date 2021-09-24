import { combineReducers } from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import products from './products';
import userReducer from './users';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['product', 'user']
}

const rootReducer = combineReducers({
    products: products,
    user: userReducer
});

export default persistReducer(persistConfig, rootReducer);