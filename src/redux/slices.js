import { createSlice } from '@reduxjs/toolkit';

export const addContactSlice = createSlice({
  name: 'contacts',
  initialState: {
    value: [],
  },
  reducers: {
    addContact: (state, action) => {
      state.value.unshift(action.payload);
    },
    deleteContact: (state, action) => {
      state.value = state.value.filter(contact => contact.id !== action.payload);
    },
  },
});

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    value: '',
  },
  reducers: {
    filter: (state, action) => {
      state.value = action.payload;
    },
  },
});
