import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter, deleteContact } from 'redux/contactsSlice';
import ContactItem from './ContactItem/ContactItem';

const ContactList = () => {
  const dispatch = useDispatch();

  const {items} = useSelector(getContacts);
  const filter = useSelector(getFilter);
  console.log(items)

  const getContact = () => {
    const findContact = items.filter(contact => {
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
            contactsArray={items}
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
