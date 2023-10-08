import { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { add } from 'redux/sliceContact';
import { selectContacts } from 'redux/selectors';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = evt => {
    const { name, value } = evt.target;
    name === 'name' ? setName(value) : setNumber(value);
  };
  const reset = () => {
    setName('');
    setNumber('');
  };
  const contacts = useSelector(selectContacts);
  return (
    <form
      className={css.form}
      onSubmit={e => {
        e.preventDefault();
        if (
          contacts.some(
            value => value.name.toLocaleLowerCase() === name.toLocaleLowerCase()
          )
        ) {
          alert(`${name} is alredy in contacts`);
        } else {
          dispatch(add({ name, number, id: nanoid() }));
        }
        reset();
      }}
    >
      <div>
        <label className={css.label}>
          <span>Name</span>
        </label>
        <input
          className={css.input}
          value={name}
          onChange={handleChange}
          type="text"
          name="name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />

        <label>
          <span>Number</span>
        </label>
        <input
          className={css.input}
          value={number}
          onChange={handleChange}
          type="tel"
          name="number"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button className={css.btn} type="submit">
          Add contact
        </button>
      </div>
    </form>
  );
};
