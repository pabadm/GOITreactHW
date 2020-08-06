import { configureStore, createReducer, createAction } from '@reduxjs/toolkit';

export const addContact = createAction('contact/add');
export const removeContact = createAction('contact/remove');
export const addFilter = createAction('filter/add');

const initialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const contacts = createReducer([...initialState], {
  [addContact.type]: (state, action) => [...state].concat(action.payload),
  [removeContact.type]: (state, action) =>
    [...state].filter(contact => contact.id !== action.payload),
});
const filter = createReducer('', {
  [addFilter.type]: (state, action) => action.payload,
});

const store = configureStore({ reducer: { contacts, filter } });

export default store;
