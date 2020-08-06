import React, { useState } from 'react';
import { connect } from 'react-redux';
import shortid from 'shortid';

import { addContact } from '../../redux';

import styles from './ContactForm.module.scss';

const ContactForm = props => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = evt => {
    evt.preventDefault();
    if (name !== '' && number !== '') {
      props.dispatch(addContact({ id: shortid.generate(), name, number }));
      setName('');
      setNumber('');
    }
  };

  return (
    <div className={styles.ContactForm}>
      <form className={styles['ContactForm-form']} onSubmit={handleSubmit}>
        <input
          className={styles['ContactForm-form-input']}
          type="text"
          name="name"
          placeholder="Enter the name"
          value={name}
          onChange={({ target }) => setName(target.value)}
        />
        <input
          className={styles['ContactForm-form-input']}
          type="text"
          name="number"
          placeholder="Enter the number"
          value={number}
          onChange={({ target }) => setNumber(target.value)}
        />
        <input
          className={styles['ContactForm-form-input']}
          type="submit"
          value="Add contact"
        />
      </form>
    </div>
  );
};

export default connect()(ContactForm);
