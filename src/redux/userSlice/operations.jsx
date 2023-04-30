import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://644a084079279846dcdd2d92.mockapi.io/api';

export const fetchUsers = createAsyncThunk(
  'users/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/user');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const updateFollowers = createAsyncThunk(
  'followers/updateAll',
  async (body, thunkAPI) => {
    try {
      const { followers } = body;

      const response = await axios.put(`/user/${body.id}`, { followers });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
