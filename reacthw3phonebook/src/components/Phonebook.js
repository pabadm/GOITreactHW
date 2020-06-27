import React from 'react';

import shortid from 'shortid';

import PropTypes from 'prop-types';

import alertCall from 'sweetalert';

import './Phonebook.css';
//  компонент контакта принимает только номер и имя

const Contact = ({ id, name, number, deleteContact }) => {
  return (
    <li id={id} className="Contact">
      <span className="contact-name">{`${name}: `}</span>
      <span className="contact-number">{number}</span>
      <button className="contact-delete" type="button" onClick={deleteContact}>
        delete
      </button>
    </li>
  );
};
Contact.defaultProps = {
  name: 'name',
  number: 'number',
  deleteContact: null,
  id: null,
};
Contact.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  deleteContact: PropTypes.func,
  id: PropTypes.string,
};

// компонент формы доавления контактов принимает пару коллбеков, номер и телефон
// отрисовывает все динамически

const ContactForm = ({ name, number, handleChange, handleSubmit }) => {
  return (
    <form className="Contact-form" onSubmit={handleSubmit}>
      <input
        className="name-input input"
        type="text"
        name="name"
        placeholder="enter the name"
        value={name}
        onChange={handleChange}
      />

      <input
        className="number-input input"
        type="text"
        name="number"
        placeholder="enter the number"
        value={number}
        onChange={handleChange}
      />
      <input className="submit-input input" type="submit" value="submit" />
    </form>
  );
};

ContactForm.defaultProps = {
  name: 'name',
  number: 'number',
  handleChange: null,
  handleSubmit: null,
};
ContactForm.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
};

// компонент поиска принимает коллбек и значение фильтра

const Filter = ({ filter, handleChange }) => {
  return (
    <input
      className="Filter"
      type="text"
      name="filter"
      placeholder="search your contacts"
      value={filter}
      onChange={handleChange}
    />
  );
};

Filter.defaultProps = {
  filter: 'filter',
  handleChange: null,
};
Filter.propTypes = {
  filter: PropTypes.string,
  handleChange: PropTypes.func,
};

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
