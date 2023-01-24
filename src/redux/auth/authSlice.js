import { register, login, logout } from './auth-operations';
import { createSlice, isAnyOf } from '@reduxjs/toolkit';
const initialState = {
  user: { name: '', email: '' },
  isLoading: false,
  token: null,
  error: null,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(register.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
      })
      .addCase(logout.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
      })
      .addMatcher(
        isAnyOf(register.pending, login.pending, logout.pending),
        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(register.rejected, login.rejected, logout.rejected),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      )
      .addMatcher(
        isAnyOf(register.fulfilled, login.fulfilled, logout.fulfilled),
        state => {
          state.isLoading = false;
          state.error = null;
        }
      ),
});
export default authSlice.reducer;
