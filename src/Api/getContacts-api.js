import axios from 'axios';

export const getAllContacts = async (_, thunkAPI) => {
  try {
    const response = await axios(
      'https://648c5c668620b8bae7ecc47c.mockapi.io/contacts'
    );
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
};
