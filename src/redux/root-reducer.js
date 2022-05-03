import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import userReducer from './user/user.reducer';
import directoryReducer from './directory/directory.reducer';
import storage from 'redux-persist/lib/storage';
import cartReducer from './booking_cart/cart.reducer';
import shopReducer from './shop/shop.reducer';

//import sessionStorage from "redux-persist/es/storage/session"; //this give a session storage which is only relative upto a particular session. Once the session is expired or the window/browser is closed this data will be deleted

// export default combineReducers({
//     user: userReducer,
//     cart: CartReducer
// })  //we need a middleware hence we are now using this with a name of rootReducer


const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer
});

export default persistReducer(persistConfig, rootReducer);
