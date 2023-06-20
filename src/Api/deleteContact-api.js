import axios from 'axios';

export const deleteData = async (id, thunkAPI) => {
  try {
    const response = await axios.delete(
      `https://648c5c668620b8bae7ecc47c.mockapi.io/contacts/${id}`
    );
    return await response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
};
