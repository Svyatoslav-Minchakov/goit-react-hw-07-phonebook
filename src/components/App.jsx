import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { Form } from './form/form';
import { ContactList } from './contacts/contactsList';
import { Filter } from './filter/filter';
import { Container } from './App.styled';

export const App = () => {
  const [contacts, setContacts] = useState([
    { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
    { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
    { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
    { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const localData = localStorage.getItem('contacts');
    if (localData) {
      setContacts(JSON.parse(localData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const createContact = data => {
    const isDuplicateName = contacts.some(
      item => item.name.toLowerCase() === data.name.toLowerCase()
    );
    if (isDuplicateName) {
      alert('This name already exists');
      return;
    }

    const newContact = { ...data, id: nanoid() };

    setContacts(prevContacts => [...prevContacts, newContact]);
  };

  const onChangeFilter = ({ target: { value } }) => {
    setFilter(value);
  };

  const deleteContact = id => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );
  };

  const getFilterContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filterContacts = getFilterContacts();

  return (
    <Container>
      <h2>Phonebook</h2>
      <Form createContact={createContact} />
      <Filter filter={filter} onChangeFilter={onChangeFilter} />
      <h2>Contacts</h2>
      <ContactList contacts={filterContacts} deleteContact={deleteContact} />
    </Container>
  );
};
