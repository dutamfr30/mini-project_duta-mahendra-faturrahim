import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import userSlice from './userSlice';
import { persistReducer, persistStore } from "redux-persist";
import { configureStore } from "@reduxjs/toolkit";

const reducers = combineReducers({
    user: userSlice
})

const persistConfig = {
    key: 'root',
    storage
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({ reducer: persistedReducer });
const persistor = persistStore(store);

export { store, persistor };