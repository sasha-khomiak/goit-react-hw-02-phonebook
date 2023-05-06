import React, { Component } from 'react';

import { nanoid } from 'nanoid';

import { Input, Label, Button, Form, Wrap } from './ContactForm.styled';

import PropTypes from 'prop-types';

export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChangeInput = e => {
    // console.log(e.currentTarget.name);
    // console.log(e.currentTarget.value);
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };

  onSubmitForm = e => {
    e.preventDefault();
    const newContact = {
      id: nanoid(5),
      ...this.state,
    };
    // console.log(newContact);
    this.props.addContact(newContact);
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <Form onSubmit={this.onSubmitForm}>
        <Wrap>
          <Label>
            Name:
            <Input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={this.state.name}
              onChange={this.handleChangeInput}
            />
          </Label>
          <Label>
            Number:
            <Input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={this.state.number}
              onChange={this.handleChangeInput}
            />
          </Label>
        </Wrap>
        <Button type="submit">Add contact</Button>
      </Form>
    );
  }
}

ContactForm.propTypes = { addContact: PropTypes.func.isRequired };
