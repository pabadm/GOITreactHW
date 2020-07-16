import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ msg }) => {
  return <span>{msg}</span>;
};
Message.propTypes = {
  msg: PropTypes.string.isRequired,
};
// console.log('ll :>> ');
export default Message;
