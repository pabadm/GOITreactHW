import React, { useState } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

import ContactDeleter from './ContactDeleter/ContactDeleter';
import { removeContact } from '../../../redux';
import styles from './Contact.module.scss';

const Contact = ({ name, number, id, dispatch }) => {
  const [inProp, setInProp] = useState(true);
  const deleteContact = () => {
    setInProp(false);
  };
  if (inProp === false) {
    setTimeout(() => dispatch(removeContact(id)), 500);
  }
  return (
    <CSSTransition in={inProp} appear timeout={500} classNames="Contact">
      <li className={styles.Contact} id={id}>
        <div className={styles['Contact-info']}>
          <span>{name}: </span>
          <span>{number}</span>
        </div>
        <ContactDeleter deleteContact={deleteContact} id={id} />
      </li>
    </CSSTransition>
  );
};

export default connect()(Contact);
