import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllContacts } from "../Api/getContacts-api";

export const fetchContacts = createAsyncThunk('contacts/fetchAll', () => {
    return getAllContacts();
})