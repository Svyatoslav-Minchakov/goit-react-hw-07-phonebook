import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Form } from './form/form';
import { ContactList } from './contacts/contactsList';
import { Filter } from './filter/filter';
import { Container } from './App.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
      { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
      { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
      { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  createContact = data => {
    const newContact = { name: data.name, number: data.number, id: nanoid() };
    if (this.state.contacts.some(item => item.name === newContact.name)) {
      alert('It has alredy been');
      return;
    }

    this.setState(
      prevState => ({
        contacts: [...prevState.contacts, newContact],
      }),
      () => {
        console.log(this.state);
      }
    );
  };

  onChangeFilter = ({ target: { value } }) => {
    this.setState({ filter: value });
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const filterContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return (
      <Container>
        <h2>Phonebook</h2>
        <Form createContact={this.createContact} />
        <Filter filter={filter} onChangeFilter={this.onChangeFilter} />
        <h2>Contacts</h2>
        <ContactList
          contacts={filterContacts}
          deleteContact={this.deleteContact}
        />
      </Container>
    );
  }
}
