import React from 'react';

import { connect } from 'react-redux';

import { removeContact } from '../../../../redux';

const ContactDeleter = ({ contactID, dispatch }) => {
  return (
    <div className="ContactDeleter">
      <button type="button" onClick={() => dispatch(removeContact(contactID))}>
        delete
      </button>
    </div>
  );
};

export default connect()(ContactDeleter);
