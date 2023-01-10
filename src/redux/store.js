import { createStore, combineReducers } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { contactsReducer } from './contacts/contacts-reducers';
const enchancer = devToolsEnhancer();
const rootReducer = combineReducers({ contacts: contactsReducer });
export const store = createStore(rootReducer, enchancer);
