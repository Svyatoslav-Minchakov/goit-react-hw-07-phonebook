import React, { useState } from 'react';
import { PageForm } from './form.styled';

export const Form = ({ createContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const inputData = e => {
    if (e.target.name === 'name') setName(e.target.value);
    if (e.target.name === 'number') setNumber(e.target.value);
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const addContact = e => {
    e.preventDefault();
    createContact({ name, number });
    reset();
  };

  return (
    <PageForm onSubmit={addContact}>
      <label>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={inputData}
        />
      </label>

      <label>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={inputData}
        />
      </label>
      <button>Add comtact</button>
    </PageForm>
  );
};
