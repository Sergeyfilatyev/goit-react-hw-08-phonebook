import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';
const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};
export const register = createAsyncThunk(
  'auth/register',
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('users/signup', user);
      console.log(data);
      token.set(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const login = createAsyncThunk(
  'auth/login',
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('users/login', user);
      console.log(data);
      token.set(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await axios.post('users/logout');
      token.unset();
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
