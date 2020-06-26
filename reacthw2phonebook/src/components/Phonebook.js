import React from 'react';

import shortid from 'shortid';

import PropTypes from 'prop-types';

import alertCall from 'sweetalert';

//  компонент контакта принимает только номер и имя

const Contact = ({ name, number, deleteContact }) => {
  return (
    <li className="Contact">
      <span className="contact-name">{`${name}: `}</span>
      <span className="contact-number">{number}</span>
      <button type="button" onClick={deleteContact}>
        delete
      </button>
    </li>
  );
};
Contact.defaultProps = {
  name: 'name',
  number: 'number',
  deleteContact: null,
};
Contact.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  deleteContact: PropTypes.func,
};

// компонент формы доавления контактов принимает пару коллбеков, номер и телефон
const ContactForm = ({ name, number, handleChange, handleSubmit }) => {
  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="enter the name"
        value={name}
        onChange={handleChange}
      />

      <input
        type="text"
        name="number"
        placeholder="enter the number"
        value={number}
        onChange={handleChange}
      />
      <input type="submit" value="submit" />
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

// классовый компонент
class Phonebook extends React.Component {
  constructor(props) {
    super(props);
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

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    const { name, number, contacts } = this.state;
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
      contacts.push({ name: this.state.name, number: this.state.number });
    }
  };

  //
  deleteContact = ({ target }) => {
    const { contacts } = this.state;

    // ищу по номеру телефона пока что
    const deletingContact = contacts.find(
      contact => contact.number === target.previousSibling.textContent,
    );
    //
    this.setState({
      contacts: contacts.filter(contact => contact !== deletingContact),
    });
  };

  //
  render() {
    const { contacts, filter, name, number } = this.state;

    return (
      <div className="Phonebook">
        <h2>Phonebook</h2>

        <ContactForm
          name={name}
          number={number}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />

        <h3>Contacts</h3>

        <Filter handleChange={this.handleChange} filter={filter} />

        <ul className="contact-list">
          {contacts.map(
            contact =>
              contact.name.toLowerCase().includes(filter.toLowerCase()) && (
                <Contact
                  key={shortid.generate()}
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