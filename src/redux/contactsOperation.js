import { createAsyncThunk, nanoid } from '@reduxjs/toolkit';
import axios from 'axios';

// https://63d984642af48a60a7bb4587.mockapi.io/contacts;

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        'https://63d984642af48a60a7bb4587.mockapi.io/contacts'
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number, id }, thunkAPI) => {
    console.log(name, number)
    try {
      const response = await axios.post(
        'https://63d984642af48a60a7bb4587.mockapi.io/contacts',
        { name, number, id: nanoid() }
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      await axios.delete(
        `https://63d984642af48a60a7bb4587.mockapi.io/contacts/${id}`
      );
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);