// import { createStore, combineReducers } from 'redux';
// import { devToolsEnhancer } from '@redux-devtools/extension';
// import { contactsReducer } from './contacts/contacts-reducers';
// const enchancer = devToolsEnhancer();
// const rootReducer = combineReducers({ contacts: contactsReducer });
// export const store = createStore(rootReducer, enchancer);

import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contacts/contactsSlice';
import filterReducer from './filter/filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
