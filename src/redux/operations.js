import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Loading, Notify } from 'notiflix';

axios.defaults.baseURL = 'https://64beb5f65ee688b6250cd534.mockapi.io/api';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      Loading.pulse();
      const response = await axios.get('/contacts');
      Loading.remove();
      return response.data;
    } catch (e) {
      Loading.remove();
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      Loading.pulse();
      const response = await axios.post('/contacts', contact);
      Loading.remove();
      Notify.success(`${response.data.name} has added`, {
        position: 'center-top',
      });
      return response.data;
    } catch (e) {
      Loading.remove();
      Notify.failure(`Oops, something went wrong. Next time will be better`, {
        position: 'center-top',
      });
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      Loading.pulse();
      const response = await axios.delete(`/contacts/${id}`);
      Loading.remove();
      Notify.success(`${response.data.name} was removed.❌ `, {
        position: 'center-top',
      });
      return response.data;
    } catch (e) {
      Loading.remove();
      Notify.failure(`Oops, something went wrong. Next time will be better`, {
        position: 'center-top',
      });
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
