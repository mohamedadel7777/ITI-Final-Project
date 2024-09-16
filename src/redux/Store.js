import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 
import authReducer from './AuthSlice';
import cartReducer from './CartSlice'


const persistConfig = {
  key: 'root',
  storage,
};
const persistedReducer = persistReducer(persistConfig, authReducer);
const persistedCartReducer = persistReducer(persistConfig, cartReducer);
const store = configureStore({
  reducer: {
    auth: persistedReducer,
    cart: persistedCartReducer
  },
});
const persistor = persistStore(store)

export {store, persistor};

