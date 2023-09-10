import React, { Component } from 'react';
import { PageForm } from './form.styled';

export class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  inputData = e => {
    // console.log(e.target);
    // console.log(e.target.name);

    this.setState({ [e.target.name]: e.target.value });
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  addContact = e => {
    e.preventDefault();
    this.props.createContact(this.state);
    this.reset();
  };

  render() {
    return (
      <PageForm onSubmit={this.addContact}>
        <label>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.inputData}
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
            value={this.state.number}
            onChange={this.inputData}
          />
        </label>
        <button>Add comtact</button>
      </PageForm>
    );
  }
}
