import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts } from './thunks';

const handlePending = (state) => {
  state.contacts.isLoading = true;
  state.contacts.error = '';
};

const handleFulfilled = (state, action) => {
  console.log(action.payload)
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
  extraReducers: {
    [fetchContacts.pending]: (state) => {
      state.contacts.isLoading = true;
  state.contacts.error = '';
    },
    [fetchContacts.fulfilled]: (state, action) => {
      state.contacts.isLoading = false;
  state.contacts.items = action.payload;
    },
    [fetchContacts.rejected]: (state, action) => {
      state.contacts.isLoading = false;
  state.contacts.error = action.payload;
    },
  }
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(fetchContacts.pending, handlePending)
  //     .addCase(fetchContacts.fulfilled, handleFulfilled)
  //     .addCase(fetchContacts.rejected, handleRejected)
  // },

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

export const getContacts = state => state.contacts.items;
export const getFilter = state => state.filter;

export const { addContact, deleteContact, setFilter } = contactsSlice.actions;
