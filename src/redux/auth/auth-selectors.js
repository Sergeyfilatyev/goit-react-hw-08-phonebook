export const selectToken = state => state.auth.token;
export const selectName = state => state.auth.user.name;
export const selectEmail = state => state.auth.user.email;
export const selectIsFetchCurrentUser = state => state.auth.isFetchCurrentUser;
export const selectError = state => state.auth.error;
