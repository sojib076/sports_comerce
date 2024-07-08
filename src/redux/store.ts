import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";
import { baseApi } from "./api/api";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 
import persistStore from "redux-persist/es/persistStore";

const persistConfig = {
  key: 'root', 
  storage, 
};


const persistedReducer = persistReducer(persistConfig,counterReducer );

export const store = configureStore({
  
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    counter: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [ 
          'persist/PERSIST',
          'persist/REHYDRATE',
          'persist/FLUSH',
          'persist/PURGE',
        ],
      },
    }).concat(baseApi.middleware),
});
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
