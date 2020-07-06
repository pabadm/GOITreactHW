import React from 'react';

import shortid from 'shortid';

import alertCall from 'sweetalert';

import './Phonebook.css';

import Contact from './Contact/Contact';

import ContactForm from './ContactForm/ContactForm';

import Filter from './Filter/Filter';

// классовый компонент телефонной книги все всем передает

class Phonebook extends React.Component {
  constructor() {
    super();
    this.state = {
      contacts: [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ],
      name: '',
      number: '',
      filter: '',
    };
  }
  // сохраняю в локальное хранилище

  componentDidMount() {
    const { contacts } = this.state;

    if (localStorage.getItem('contacts') === null) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    } else {
      const savedContacts = JSON.parse(localStorage.getItem('contacts'));
      this.setState({ contacts: savedContacts });
    }
  }

  componentDidUpdate() {
    const { contacts } = this.state;
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }
  //

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    const { name, number, contacts } = this.state;

    const contactId = shortid.generate();

    evt.preventDefault();
    this.setState({ name: '', number: '' });
    // проверка на существующий контакт
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase(),
      ) !== undefined
    ) {
      alertCall('you have already added this contact');
      return;
    }

    if (name !== '' && number !== '') {
      contacts.push({
        id: contactId,
        name: this.state.name,
        number: this.state.number,
      });
    }
  };

  //
  deleteContact = ({ target }) => {
    const { contacts } = this.state;
    const deletingContactId = target.parentNode.id;
    this.setState({
      contacts: contacts.filter(contact => contact.id !== deletingContactId),
    });
  };

  //
  render() {
    const { contacts, filter, name, number } = this.state;

    return (
      <div className="Phonebook">
        <h2 className="phonebook-title">Phonebook</h2>

        <ContactForm
          name={name}
          number={number}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />

        <h3 className="phonebook-title">Contacts</h3>

        <Filter handleChange={this.handleChange} filter={filter} />

        <ul className="contact-list">
          {contacts.map(
            contact =>
              contact.name.toLowerCase().includes(filter.toLowerCase()) && (
                <Contact
                  key={contact.id}
                  id={contact.id}
                  name={contact.name}
                  number={contact.number}
                  deleteContact={this.deleteContact}
                />
              ),
          )}
        </ul>
      </div>
    );
  }
}

export default Phonebook;
