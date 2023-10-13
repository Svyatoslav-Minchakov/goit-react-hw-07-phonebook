import { useState } from 'react';
import shortid from 'shortid';
import css from 'components/ContactForm/ContactForm.module.css';
import { addContact } from '../../redux/operations';
import { getContactsValue } from 'redux/selectors';
import { useSelector, useDispatch } from 'react-redux';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getContactsValue);

  const dispatch = useDispatch();
  const id = shortid.generate();

  const createContact = ({ name, number }) => ({
    id: id,
    name,
    number,
  });

  const addContactToState = contact => dispatch(addContact(contact));

  const handleInputChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const userName = contacts.find(
      user => user.name.toLocaleLowerCase() === name.toLowerCase()
    );
    if (userName) {
      alert(`${name} is already in contacs`);
    } else {
      addContactToState(createContact({ name, number }));
      reset();
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.label}>Name</label>

      <input
        className={css.input}
        type="text"
        name="name"
        value={name}
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={handleInputChange}
      />

      <label className={css.label}>Number</label>

      <input
        className={css.input}
        type="tel"
        name="number"
        value={number}
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={handleInputChange}
      />

      <button className={css.btn} type="submit">
        Add contact
      </button>
    </form>
  );
};
