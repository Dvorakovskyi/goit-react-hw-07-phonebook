import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    filter: '',
  },
  reducers: {
    addContact: (state, action) => ({
      ...state,
      contacts: [...state.contacts, action.payload],
    }),
    deleteContact: (state, action) => ({
      ...state,
      contacts: state.contacts.filter(contact => contact.id !== action.payload),
    }),
    setFilter: (state, action) => ({ ...state, filter: action.payload }),
  },
});

export default contactsSlice.reducer;

export const getContacts = state => state.contacts;
export const getFilter = state => state.filter;

export const { addContact, deleteContact, setFilter } = contactsSlice.actions;
