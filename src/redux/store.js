import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { contactsListReducer, filterReducer } from "./contacts/reducers";

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

const persistConfig = {
  key: "contacts",
  version: 1,
  storage,
  blacklist: ["filter", "filteredCont"],
};
export const rootReducer = combineReducers({
  contacts: contactsListReducer,
  filter: filterReducer,
  
});
const persistedContactsReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedContactsReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

//////////////////Redux

// import { createStore } from "redux";
// import { rootReducer } from "./contacts/reducers";
// import { composeWithDevTools } from 'redux-devtools-extension';

// const store = createStore(rootReducer, composeWithDevTools());
// export default store;
/////////////////

