import React from 'react';

import styles from './ContactDeleter.module.scss';

const ContactDeleter = ({ deleteContact }) => {
  return (
    <div className={styles.ContactDeleter}>
      <button
        className={styles['ContactDeleter-btn']}
        type="button"
        onClick={deleteContact}
      >
        <span className={styles['ContactDeleter-btn-text']}>&#x292B;</span>
      </button>
    </div>
  );
};

export default ContactDeleter;
