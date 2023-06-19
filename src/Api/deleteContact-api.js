import axios from "axios";

export const deleteData = async (id) => {
    try {
        await axios.delete(`https://648c5c668620b8bae7ecc47c.mockapi.io/contacts/${id}`)
    }
    catch (error) {
        console.log(error)
    }
}