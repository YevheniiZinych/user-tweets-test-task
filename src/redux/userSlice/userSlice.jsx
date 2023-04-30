import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers, updateFollowers } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const userSlice = createSlice({
  name: 'user',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchUsers.pending]: handlePending,
    [fetchUsers.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchUsers.rejected]: handleRejected,

    [updateFollowers.pending]: handlePending,
    [updateFollowers.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
    },
    [updateFollowers.rejected]: handleRejected,
  },
});

export const userReducer = userSlice.reducer;
