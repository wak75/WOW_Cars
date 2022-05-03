import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);




// import root_reducer from "./root_reducer";
// const middleWare = [logger];
// const store = createStore(root_reducer,applyMiddleware(...middleWare))
// export default store
// export default {persistor,store} this is not gonna work as we are not destructing at the recieving end