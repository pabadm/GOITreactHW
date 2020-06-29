import React from 'react';

import PropTypes from 'prop-types';

import './ModalWindow.css';

const ModalWindow = ({ link, alt, closeModal }) => {
  return (
    <button type="button" className="ModalWindow-btn" onClick={closeModal}>
      <div className="ModalWindow">
        <img className="ModalWindow-img" src={link} alt={alt} />
      </div>
    </button>
  );
};
ModalWindow.propTypes = {
  link: PropTypes.string,
  alt: PropTypes.string,
  closeModal: PropTypes.func,
};
ModalWindow.defaultProps = null;
export default ModalWindow;
