import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact } from './thunks';

const handlePending = state => {
  state.contacts.isLoading = true;
  state.contacts.error = '';
};

const handleFulfilled = (state, action) => {
  state.contacts.isLoading = false;
  state.contacts.items = action.payload;
};

const handleRejected = (state, action) => {
  state.contacts.isLoading = false;
  state.contacts.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: {
      items: [],
      isLoading: false,
      error: null,
    },
    filter: '',
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, handleFulfilled)
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.contacts.items.push(action.payload);
      })
      .addCase(addContact.rejected, handleRejected);
  },
  reducers: {
    setFilter: (state, action) => ({ ...state, filter: action.payload }),
  },
  // reducers: {
  //   addContact: (state, action) => ({
  //     ...state,
  //     contacts: [...state.contacts, action.payload],
  //   }),
  //   deleteContact: (state, action) => ({
  //     ...state,
  //     contacts: state.contacts.filter(contact => contact.id !== action.payload),
  //   }),
  //   setFilter: (state, action) => ({ ...state, filter: action.payload }),
  // },
});

export const contactReduser = contactsSlice.reducer;

export const getContacts = state => state.contacts;
export const getFilter = state => state.filter;

export const { setFilter } = contactsSlice.actions;
