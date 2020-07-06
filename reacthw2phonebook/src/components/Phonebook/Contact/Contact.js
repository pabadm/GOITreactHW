import React from 'react';

import PropTypes from 'prop-types';

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

export default Contact;
