import React, { useState } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactsList from './ContactsList/ContactsList';

const App = ({ contacts }) => {
  return (
    <div className="Phonebook">
      <CSSTransition in appear timeout={500} classNames="Phonebook-title">
        <h1 className="Phonebook-title">Phonebook</h1>
      </CSSTransition>
      <ContactForm />
      <Filter />
      {contacts.length >= 1 && <ContactsList />}
    </div>
  );
};

const mapStateToProps = state => ({
  contacts: state.contacts,
});

export default connect(mapStateToProps)(App);
