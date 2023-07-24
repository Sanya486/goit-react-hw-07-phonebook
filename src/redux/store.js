import {configureStore } from '@reduxjs/toolkit';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { addContactSlice, filterSlice } from './slices';

const persistContactsConfig = {
  key: 'contacts',
  storage,
};

export const contactReducer = persistReducer(
  persistContactsConfig,
  addContactSlice.reducer
);

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filter: filterSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);


export const { addContact, deleteContact } = addContactSlice.actions;
export const { filter } = filterSlice.actions;
