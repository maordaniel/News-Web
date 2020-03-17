import { createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import reducers from "./reducers";
import localStorage from 'redux-persist/lib/storage';

const persistConfig = {
  key: "root",
  storage: localStorage,
};

const pReducer = persistReducer(persistConfig, reducers);


const DEFAULT_STATE = {};

const store = createStore(
    pReducer,
    DEFAULT_STATE,
    applyMiddleware(thunk,logger)
);

const persistor = persistStore(store);
export { persistor, store };
