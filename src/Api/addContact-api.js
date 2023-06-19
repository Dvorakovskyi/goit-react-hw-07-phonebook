import axios from 'axios';

export const postData = async ({ id, name, phone }) => {
  try {
    await axios.post('https://648c5c668620b8bae7ecc47c.mockapi.io/contacts', {
      id,
      name,
      phone,
    });
  } catch (error) {
    console.log(error);
  }
};
