import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import ContactsReducer from "./Reducers/ContactsReducer";
import ContactReducer from "./Reducers/ContactReducer";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import AuthReducer from "./Reducers/AuthReducer";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token", "user"],
};

export const store = configureStore({
  reducer: {
    contacts: ContactsReducer,
    contact: ContactReducer,
    auth: persistReducer(authPersistConfig, AuthReducer),
  },
  middleware: [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  ],
});

export const persistor = persistStore(store);
