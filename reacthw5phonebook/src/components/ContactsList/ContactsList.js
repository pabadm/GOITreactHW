import React from 'react';

import { connect } from 'react-redux';

import Contact from './Contact/Contact';

const ContactsList = ({ contacts, filter }) => {
  const lowFilter = filter.toLowerCase();

  const filteredContacts = contacts.filter(
    ({ name, number }) =>
      name.toLowerCase().includes(lowFilter) ||
      number.toLowerCase().includes(lowFilter),
  );

  return (
    <section className="ContactsList">
      <ul className="ContactsList-list">
        {filteredContacts.map(({ id, name, number }) => (
          <Contact key={id} id={id} name={name} number={number} />
        ))}
      </ul>
    </section>
  );
};

const mapStateToProps = state => ({
  contacts: state.contacts,
  filter: state.filter,
});

export default connect(mapStateToProps)(ContactsList);
