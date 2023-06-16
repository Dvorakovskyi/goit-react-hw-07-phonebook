import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter, deleteContact } from 'redux/contactsSlice';
import ContactItem from './ContactItem/ContactItem';

const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const getContact = () => {
    const findContact = contacts.filter(contact => {
      return contact.name
        .toLowerCase()
        .trim()
        .includes(filter.toLowerCase().trim());
    });
    return findContact;
  };

  const foundContact = getContact();

  return (
    <section>
      <ul>
        {foundContact.map(({ id, number, name }) => (
          <ContactItem
            contactsArray={contacts}
            key={id}
            name={name}
            number={number}
            onClick={() => dispatch(deleteContact(id))}
          />
        ))}
      </ul>
    </section>
  );
};

export default ContactList;
