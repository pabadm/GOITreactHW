import React from 'react';

import PropTypes from 'prop-types';

// компонент формы доавления контактов принимает пару коллбеков, номер и телефон
// отрисовывает все динамически
const ContactForm = ({ name, number, handleChange, handleSubmit }) => {
  return (
    <form className="Contact-form" onSubmit={handleSubmit}>
      <input
        className="name-input input"
        type="text"
        name="name"
        placeholder="enter the name"
        value={name}
        onChange={handleChange}
      />

      <input
        className="number-input input"
        type="text"
        name="number"
        placeholder="enter the number"
        value={number}
        onChange={handleChange}
      />
      <input className="submit-input input" type="submit" value="submit" />
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

export default ContactForm;
