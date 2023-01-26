import { register, login, logout, fetchCurrentUser } from './auth-operations';
import { createSlice, isAnyOf } from '@reduxjs/toolkit';
const initialState = {
  user: { name: '', email: '' },
  isLoading: false,
  token: null,
  error: null,
  isFetchCurrentUser: false,
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
      .addCase(logout.fulfilled, state => {
        state.user = { name: '', email: '' };
        state.token = null;
      })
      .addCase(fetchCurrentUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isFetchCurrentUser = false;
      })
      .addCase(fetchCurrentUser.pending, state => {
        state.isFetchCurrentUser = true;
      })
      .addCase(fetchCurrentUser.rejected, state => {
        state.isFetchCurrentUser = false;
      })
      .addMatcher(
        isAnyOf(
          register.pending,
          login.pending,
          logout.pending,
          fetchCurrentUser.pending
        ),
        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          register.rejected,
          login.rejected,
          logout.rejected,
          fetchCurrentUser.rejected
        ),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      )
      .addMatcher(
        isAnyOf(
          register.fulfilled,
          login.fulfilled,
          logout.fulfilled,
          fetchCurrentUser.fulfilled
        ),
        state => {
          state.isLoading = false;
          state.error = null;
        }
      ),
});
export default authSlice.reducer;
