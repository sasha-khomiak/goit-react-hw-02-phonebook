// імпорт реакту і компоненту реакту
import React, { Component } from 'react';

// імпорт стилізованих компонентів для App
import { Container } from './App.styled';

// імпорт компонентів
import ContactList from './ContactList';
// import Filter from './Filter';
// import ContactForm from './ContactForm';

// створення нашого компоненту-класу App
export class App extends Component {
  //наші стейти
  state = {
    contacts: [
      { id: 'id-1', name: 'Alex', number: '459-12-56' },
      { id: 'id-2', name: 'Inna', number: '443-89-12' },
      { id: 'id-3', name: 'Max', number: '645-17-79' },
      { id: 'id-4', name: 'Helga', number: '227-91-26' },
    ],
    name: '',
  };

  // метод, який видаляє наш контакт із стейту в властивості contacts, що є масивом обʼєктів
  deleteContact = index => {
    // console.log('index', index);
    this.setState(prevState => {
      // console.log('prevState', prevState.contacts);
      return {
        contacts: prevState.contacts.filter(element => element.id !== index),
      };
    });
  };

  // метод, який додає новий контакт в стейт в властивість contacts, що є масивом обʼєктів

  render() {
    return (
      <Container>
        <h2>Phonebook</h2>
        <div>
          <form>
            <label>
              Name:
              <input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              />
            </label>
            <label>
              {' '}
              Number:
              <input
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
              />
            </label>
            <button type="submit">Add contact</button>
          </form>
        </div>
        <h2>Contacts</h2>

        <ContactList state={this.state} deleteContact={this.deleteContact} />
        {/* <ul>
          {this.state.contacts.map(item => {
            return (
              <li key={item.id}>
                <p>
                  {item.name}: {item.number}
                </p>
                <button
                  type="button"
                  onClick={() => this.deleteContact(item.id)}
                >
                  Delete contact
                </button>
              </li>
            );
          })}
        </ul> */}
      </Container>
    );
  }
}
