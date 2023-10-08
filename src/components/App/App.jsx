import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { ContactForm } from '../ContactForm/ContactForm';
import css from './App.module.css';

export const App = () => {
  // const filtered = useSelector(selectFilter);
  // const contacts = useSelector(selectContacts);

  // const filterContact = e => {
  //   const filteredContacts = contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(filtered.toLowerCase())
  //   );
  //   return filteredContacts;
  // };

  return (
    <div className={css.container}>
      <h2>Phonebook</h2>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};
