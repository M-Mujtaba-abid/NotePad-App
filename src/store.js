// import { configureStore } from '@reduxjs/toolkit'
// import pasteReducer from '../src/fetures/counter/pasteSlice'

// export const store = configureStore({
//   reducer: {
//     paste: pasteReducer,

//   },
// })


import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import pasteReducer from "../src/fetures/counter/pasteSlice";

const persistConfig = {
  key: "root", 
  storage, 
};

const persistedReducer = persistReducer(persistConfig, pasteReducer);

export const store = configureStore({
  reducer: {
    paste: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, 
    }),
});

export const persistor = persistStore(store);

