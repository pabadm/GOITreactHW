import React from 'react';
import PropTypes from 'prop-types';

import styles from './Message.module.scss';

const Message = ({ msg }) => {
  return (
    <div className={styles.Message}>
      <span className={styles['Message-text']}>{msg}</span>
    </div>
  );
};
Message.propTypes = {
  msg: PropTypes.string.isRequired,
};
// console.log('ll :>> ');
export default Message;
