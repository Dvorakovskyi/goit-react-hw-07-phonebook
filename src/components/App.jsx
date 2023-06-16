import React from 'react';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contactsSlice';
import ContactForm from './ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from './Filter/Filter';
import Notification from './Notification/Notification';
import { StyledWrapper } from './App.styled';

const App = () => {
  const contacts = useSelector(getContacts);

  return (
    <StyledWrapper>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {contacts.length > 0 ? <ContactList /> : <Notification />}
    </StyledWrapper>
  );
};

export default App;
