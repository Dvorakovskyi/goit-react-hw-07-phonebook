import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllContacts } from '../Api/getContacts-api';
import { postData } from 'Api/addContact-api';
import { deleteData } from 'Api/deleteContact-api';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', () => {
    return getAllContacts();
});

export const addContact = createAsyncThunk('contacts/addContact', ({id, name, phone}) => {
    return postData({id, name, phone});
})

export const deleteContact = createAsyncThunk('contacts/deleteContact', (id) => {
    return deleteData(id)
});