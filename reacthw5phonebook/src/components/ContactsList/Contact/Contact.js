import React from 'react';

import ContactDeleter from './ContactDeleter/ContactDeleter';

const Contact = ({ name, number, id }) => {
  return (
    <li className="Contact" id={id}>
      <div className="Contact-name">
        <span>{name}</span>
      </div>
      <div className="Contact-number">
        <span>{number}</span>
      </div>
      <ContactDeleter contactID={id} />
    </li>
  );
};

export default Contact;
