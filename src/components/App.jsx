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
  };

  componentDidMount() {
    const localData = localStorage.getItem('contacts');
    if (localData && JSON.parse(localData).length > 0) {
      this.setState({ contacts: JSON.parse(localData) });
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts.length !== this.state.contacts.length) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  createContact = data => {
    const isDublicateName = this.state.contacts.some(
      item => item.name.toLowerCase() === data.name.toLowerCase()
    );
    if (isDublicateName) {
      alert('It has alredy been');
      return;
    }

    const newContact = { ...data, id: nanoid() };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  onChangeFilter = ({ target: { value } }) => {
    this.setState({ filter: value });
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  getFilterContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const { filter } = this.state;
    const filterContacts = this.getFilterContacts();
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
