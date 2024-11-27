import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "./user/userSlice";
import claimReducer from "./claims/userSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth-slice", "user-slice"], // SPECIFY WHICH REDUCERS TO PERSIST
};

const rootReducer = combineReducers({
  user: userReducer,
  claim: claimReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // DISABLE SERIALIZABLE CHECK FOR REDUX-PERSIST
    }),
});

export const persistor = persistStore(store);
