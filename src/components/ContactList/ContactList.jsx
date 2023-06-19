import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter, deleteContact } from 'redux/contactsSlice';
import ContactItem from './ContactItem/ContactItem';
import Notification from 'components/Notification/Notification';

const ContactList = () => {
  const dispatch = useDispatch();

  const { items } = useSelector(getContacts);
  const filter = useSelector(getFilter);
  console.log(items)

  const getContact = () => {
    const findContact = items.filter(({name}) => {
      return name
        .toLowerCase()
        .trim()
        .includes(filter.toLowerCase().trim());
    });
    return findContact;
  };

  const foundContact = getContact();

  return (
    <section>
      {items.length > 0 ? (
        <ul>
          {foundContact.map(({ id, phone, name }) => (
            <ContactItem
              contactsArray={items}
              key={id}
              name={name}
              phone={phone}
              // onClick={() => dispatch(deleteContact(id))}
            />
          ))}
        </ul>
      ) : (
        <Notification />
      )}
    </section>
  );
};

export default ContactList;
