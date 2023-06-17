import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllContacts } from "../Api/getContacts-api";

// axios.defaults.baseURL = 'https://648c5c668620b8bae7ecc47c.mockapi.io';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', () => {
    return getAllContacts();
})