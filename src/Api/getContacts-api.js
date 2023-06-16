export const getAllContacts = () => {
    return fetch('https://648c5c668620b8bae7ecc47c.mockapi.io/contacts')
        .then(response => {
            if (!response.ok) {
            throw new Error(response.status)
            }
            
            return response.json();
    })
}